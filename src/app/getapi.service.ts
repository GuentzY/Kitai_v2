import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
  })
}
constructor( public _http: HttpClient) { 

}

getdata<T> (url : string)
{
  url = 'https://jsonplaceholder.typicode.com/users'
  return this._http.get<T[]>(url);
}
}