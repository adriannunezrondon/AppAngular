import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Post }from './Posts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    console.log("Service is working!!!");
  }
  getData(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts');

  }
}
