import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  adminLogin=(dataToSend:any)=>
  {

    return this.http.get("http://localhost:8080/",dataToSend)
  }

  userLogin=(dataToSend1:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend1)
  }

  userRegister=(dataToSend2:any)=>
  {
    return this.http.post("http://localhost:8080/register",dataToSend2)
  }
}
