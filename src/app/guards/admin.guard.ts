import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';
import { UsuariofireService } from '../servicios/usuariofire.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  usuarioLogeado : string;

  constructor(private authSvc : AuthService, private usuarioFire : UsuariofireService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authSvc.afAuth.authState.pipe(take(1)).pipe(map(authState => !!authState)).pipe(tap(auth => {
        if(auth)
        {
          let existe : boolean = false;

          this.authSvc.afAuth.authState.subscribe(user=>{

            if(user!=null)
            {
              this.usuarioLogeado = user.email; 
                
            }
                 
          });

              this.usuarioFire.TraerTodos().valueChanges().pipe(take(1)).subscribe(admSnap=>{
                admSnap.forEach((response):any=>{
                  // let admin : any = response.payload.doc.data();
                
                    if(response.email == this.usuarioLogeado && response.perfil == "admin")
                    {
                      existe = true;
                    }

                   })
            
                if(existe == false)
                {
      
                  this.router.navigate(['/login'])
                  
                }
                
                
              })
              
        }
        
      }));
  }
  
}
