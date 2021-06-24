import { Component, OnInit } from '@angular/core';
import { DatosGitService } from '../../servicios/datosgit.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  public misDatos : any;
 

  constructor(private datosgitSvc : DatosGitService) {
    
   }

  ngOnInit(): void {
    
    this.datosgitSvc.traerDatosGit().subscribe((result)=>{
      this.misDatos=result;
      
    })
  }

}
