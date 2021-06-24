import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Container } from '../clases/container';


@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  containers: any[] = [];

  rutaDeLaColeccion = '/container';
  referenciaAlaColeccion: AngularFirestoreCollection<Container>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

    this.referenciaAlaColeccion.valueChanges().subscribe((data: any) => {
      data.forEach(element => {
        this.containers.push(element);
      });
    });
  }


  public CrearContainer(con: Container): any {
    return this.referenciaAlaColeccion.add({ ...con });
  }

  public traerContainers() {
    return this.referenciaAlaColeccion;
  }

 

  public actualizarContainer(id:string,data:any) : any
  {
     return this.referenciaAlaColeccion.doc(id).set(data);
  }

   public eliminarContainer(id:string) : any
   {
      return this.referenciaAlaColeccion.doc(id).delete();
   }


  public getAll() {
    return this.containers;
  }


}
