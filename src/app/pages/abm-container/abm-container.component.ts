import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContainerService } from 'src/app/servicios/container.service';
import { Container } from '../../clases/container';


@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.scss']
})
export class AbmContainerComponent implements OnInit {

  container$ : Observable<Container[]>;
  container : Container = new Container();


  

  constructor(private contSvc : ContainerService) 
  { 
    this.container$ = this.contSvc.traerContainers().valueChanges();
  }


  agregarContainer(cont: Container) 
  {
    let existe : boolean = false;

    this.container$.pipe(take(1)).subscribe(list=>{
      list.forEach(element=>{
        
        if(element.codigo == cont.codigo)
        {
          existe = true;
        }

      })

      if(existe != true)
      {
         this.contSvc.CrearContainer(cont);
      }
      else
      {
        console.log('Ya existe');
      }
    })

    
   
  }

  selectContainer(cont: Container)
  {
    this.container.codigo = cont.codigo;
    this.container.marca = cont.marca;
    this.container.capacidad = cont.capacidad;
  }

  

  ngOnInit(): void {
  }

}
