import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Usuario} from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }

  )

  usuario : Usuario;
  emailAcceso: string='';
  passAcceso: string='';

  constructor(private authSvc: AuthService, private formBuilder:FormBuilder,private router : Router) {
    this.usuario = new Usuario();
   }


  async onLogin()
  {
    const {email,password} = this.loginForm.value;
    this.usuario.email = email;
    this.usuario.password = password;
    
    try
    {
      const user = await this.authSvc.login(this.usuario);

      if(user)
      {
        localStorage.setItem('token', this.usuario.email);
        this.router.navigate(['/bienvenida']);
        console.log("Logueado!");
      }
      
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

  accesoRapidoUno(){
    this.emailAcceso = "empleado@empleado.com";
    this.passAcceso = "111111";
    

  }

  accesoRapidoDos(){
    this.emailAcceso = "admin@admin.com";
    this.passAcceso = "222222";

  }

  ngOnInit(): void {
  }

}
