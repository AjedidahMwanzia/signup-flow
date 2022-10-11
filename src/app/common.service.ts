import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  Url:any = environment.Url
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.Url);
  }
}
