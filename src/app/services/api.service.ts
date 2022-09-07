import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  srverUrl : any = 'http://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http:HttpClient
  ) { }

  gets(url:any){
    return this.http.get(this.srverUrl+url)
  }
  posts(url: any, data: any){
    return this.http.post(this.srverUrl+url, data)
  }
}
