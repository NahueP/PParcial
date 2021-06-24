import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(usuario:Usuario)
  {
   try
   { 
      return await this.afAuth.signInWithEmailAndPassword(usuario.email,usuario.password)
   }
   catch(error)
   {
     return error;
   }  
  }


  async onLogout()
  {
    await this.afAuth.signOut();
  }

}



