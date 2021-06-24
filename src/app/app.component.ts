import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PalaciosNahuel4A';


  public user$ : Observable<any>= this.authSvc.afAuth.user;

  constructor(private authSvc : AuthService, private router : Router){}

  desloguearse()
  {
    this.authSvc.onLogout().then(respose=>
      {
        this.router.navigateByUrl('/');
      })

  }
}
