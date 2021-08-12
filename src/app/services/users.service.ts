import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  getUsersList(){
    return this.http.get("https://jsonplaceholder.typicode.com/users/");
  }

  getUser(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${ id }`);
  }

  updateUser(id:any, phone:string, email:string){
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${ id }`, { phone, email })
  }
}
