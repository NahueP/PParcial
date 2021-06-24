import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-container-modificar',
  templateUrl: './container-modificar.component.html',
  styleUrls: ['./container-modificar.component.scss']
})
export class ContainerModificarComponent implements OnInit {


  codigo : number;
  marca : string;
  capacidad : number;


  @Input() containerModif; 

 
  constructor(private containerSvc : ContainerService) 
  { 

  }


  modificarContainer()
  {
    console.log(this.containerModif);

    this.containerSvc.traerContainers().snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any =>{
        let container = response.payload.doc.data();
          let id = response.payload.doc.id;

          if(container.codigo == this.containerModif.codigo)
          {
            this.containerSvc.actualizarContainer(id,JSON.parse(JSON.stringify(this.containerModif)));
          }

      })
    })
  }

  ngOnInit(): void {
    
  
  }

}
