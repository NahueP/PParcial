import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PaisesService } from './../../servicios/paises.service';


@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss']
})
export class ListaPaisesComponent implements OnInit {

  public miPais: string = "";  

  public listaPaises: any[] = [];

  @Output() paisSeleccionadoEvent: EventEmitter<any> = new EventEmitter<any>();  

  constructor(private paisesSvc: PaisesService) {

    this.paisesSvc.traerPaises().subscribe(
      (data: any) => {
        this.listaPaises = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {

    this.miPais = this.paisesSvc.obtenerPaisActual();

    this.paisesSvc.traerPaises().subscribe(result => {


    })



  }

  seleccionarPais(pais) {
    console.log(pais);
    this.paisSeleccionadoEvent.emit(pais);
  }
}
