import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iposts } from 'src/app/Shared Classes and types/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url:string="https://jsonplaceholder.typicode.com/posts"


  constructor(private http:HttpClient) {
  }
  GetAllPosts():Observable<Iposts[]>
  {
    return this.http.get<Iposts[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"server error.") }))
  }


}
