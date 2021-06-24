import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosGitService {
 

  constructor(private http: HttpClient) {
}


  traerDatosGit() {
    return this.http.get("https://api.github.com/users/NahueP");

  }

 
}