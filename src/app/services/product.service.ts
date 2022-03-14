import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from 'src/app/Shared Classes and types/Iproduct';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products:any[]=ProductComponent;
  constructor(private http:HttpClient){}
  private url:string="/assets/Data/Products.json";
  GetAllProducts():Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(this.url).pipe(catchError((err)=>{
    return throwError(()=>err.message||"server error.") }))
  }
  GetProductById(id:number):Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"server error.") }))
  }
}
