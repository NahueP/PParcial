import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-container-baja',
  templateUrl: './container-baja.component.html',
  styleUrls: ['./container-baja.component.scss']
})
export class ContainerBajaComponent implements OnInit {

  codigo : number;
  marca : string;
  capacidad : number;

  @Input() containerBorrar; 

  constructor(private containerSvc : ContainerService) { }


  borrarContainer()
  {
    
    this.containerSvc.traerContainers().snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any =>{
        let container = response.payload.doc.data();
          let id = response.payload.doc.id;

          if(container.codigo == this.containerBorrar.codigo)
          {
            this.containerSvc.eliminarContainer(id);
            
            
          }

      })
    })
  }



  ngOnInit(): void {
    
  }

}
