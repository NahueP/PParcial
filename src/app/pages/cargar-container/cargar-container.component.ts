import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Producto } from 'src/app/clases/producto';
import { ContainerService } from 'src/app/servicios/container.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Container } from '../../clases/container';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.scss']
})
export class CargarContainerComponent implements OnInit {

  container$ : Observable<Container[]>;
  productos$ : Observable<Producto[]>;
  container : Container = new Container();
  producto : Producto = new Producto();
  stock:number;
  

  constructor(private contSvc : ContainerService, private prodSvc : ProductoService) 
  { 
    this.container$ = this.contSvc.traerContainers().valueChanges();
    this.productos$ = this.prodSvc.TraerTodos().valueChanges();
  }

  ngOnInit(): void {
  }

  selectContainer(cont:Container)
  {
    this.container = cont;
  }

  selectProducto(prod : Producto)
  {
    this.producto = prod;
   
  }

  cargarContainer()
  {
    if(this.stock > 0)
    {
      if(this.stock <= this.container.capacidad && this.stock <= this.producto.stock )
      {
      
        this.contSvc.traerContainers().snapshotChanges().pipe(take(1)).subscribe(lista=>{
          lista.forEach(response=>{
            let cont = response.payload.doc.data();
            let id = response.payload.doc.id;

            cont.stock = this.stock;
            cont.producto = this.producto.descripcion;

            if(cont.codigo == this.container.codigo)
            {
               this.contSvc.actualizarContainer(id,cont);
            }

          })

          this.prodSvc.TraerTodos().snapshotChanges().pipe(take(1)).subscribe(prodList=>{
            prodList.forEach(response=>{
              let prod = response.payload.doc.data();
              let idProd = response.payload.doc.id;
  
              if(prod.codigo == this.producto.codigo)
              {
                if(prod.stock>0)
                {
                  prod.stock = prod.stock - this.stock;
                  this.prodSvc.actualizarProducto(idProd,prod);
                }
              }
            
  
            })
  
          })

          Swal.fire("Container Cargado","El container fue cargado exitosamente",'success');
        })

        

      }
      else
      {
        Swal.fire("Error","El stock no puede superar la capacidad del container, ni su propia cantidad",'warning');
      }

      
    }
    else
    {
      Swal.fire("Error","Debe haber como minimo 1 stock",'warning');
    }
    
  }


  
}
