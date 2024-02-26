import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "https://jsonplaceholder.typicode.com/users";
  params = {'userId': 1}


  constructor(private http: HttpClient) { }

  users(userId:any) {
    return this.http.get(this.url+'?userId='+userId);
  }

  saveUser(data:any){
    return this.http.post(this.url, data)
  }

}
