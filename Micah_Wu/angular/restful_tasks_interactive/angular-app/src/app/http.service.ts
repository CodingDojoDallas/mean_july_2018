import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient){}

  getAnimals(){
    return this._http.get('/animals')
  }

  getAnimal(id){
      return this._http.get(`/animal/${id}`)
    }
}

