import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient){ 
  }
  getQuotes(){
    return this._http.get('/quotes')
  }
  getThing(id){
    return this._http.post('/quote', {id: id})
  }
  // postToServer(num){
  //   return this._http.post('/quotes', num)
  // }

}


