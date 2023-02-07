import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private header = new HttpHeaders().set('content-type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: this.header });
  }
}
