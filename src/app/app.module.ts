import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { ListaPaisesComponent } from './componentes/lista-paises/lista-paises.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './componentes/producto-listado/producto-listado.component';
import { PaisProductoComponent } from './componentes/pais-producto/pais-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { AbmContainerComponent } from './pages/abm-container/abm-container.component';
import { ContainerAltaComponent } from './componentes/container-alta/container-alta.component';
import { ContainerModificarComponent } from './componentes/container-modificar/container-modificar.component';
import { ContainerBajaComponent } from './componentes/container-baja/container-baja.component';
import { CargarContainerComponent } from './pages/cargar-container/cargar-container.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    ListaPaisesComponent,
    ProductoDetalleComponent,
    ProductoListadoComponent,
    PaisProductoComponent,
    DetalleProductoComponent,
    AbmContainerComponent,
    ContainerAltaComponent,
    ContainerModificarComponent,
    ContainerBajaComponent,
    CargarContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
