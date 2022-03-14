import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iusers } from 'src/app/Shared Classes and types/users';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  GetAllUsers():Observable<Iusers[]>
  {
    return this.http.get<Iusers[]>(this.url).pipe(catchError((err)=>{
    return throwError(()=>err.message||"server error.") }))
  }
}
