import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AbmContainerComponent } from './pages/abm-container/abm-container.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { CargarContainerComponent } from './pages/cargar-container/cargar-container.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'alta-producto', component: AltaProductoComponent, canActivate: [AuthGuard] },
  { path: 'producto-detalle', component: ProductoDetalleComponent, canActivate: [AuthGuard] },
  { path: 'abm-container', component: AbmContainerComponent, canActivate: [AdminGuard] },
  { path: 'cargar-container', component: CargarContainerComponent, canActivate: [AuthGuard] },
  { 
    path: '', 
    redirectTo: '/bienvenida', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
