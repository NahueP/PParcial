import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from '../clases/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  rutaDeLaColeccion = '/productos';
  referenciaAlaColeccion: AngularFirestoreCollection<Producto>;
  referenciaBD: AngularFirestore;
  productos:Observable<any[]>;

  constructor(private bd: AngularFirestore) {
    this.referenciaBD = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.productos = this.referenciaAlaColeccion.valueChanges(this.rutaDeLaColeccion)


  }

  getAll(){
    return this.productos;
  }

  Crear(producto: Producto): any {

    
    return this.referenciaAlaColeccion.add({ ...producto });

 

  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }


  public Buscarproducto(producto: Producto) {
    return this.referenciaBD.collection(this.rutaDeLaColeccion, ref => ref.where("nombre", "==", producto.codigo).where("apellido", "==", producto.descripcion).where("edad", "==", producto.precio).where("sexo", "==", producto.stock).where("nacionalidad", "==", producto.paisOrigen).where("nacionalidad", "==", producto.comestible));
  }

  public actualizarProducto(id:string,data:any) : any
  {
     return this.referenciaAlaColeccion.doc(id).set(data);
  }


}