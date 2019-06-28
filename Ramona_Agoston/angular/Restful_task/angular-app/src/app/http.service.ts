import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) { } // Set up private attribute to use HttpClient. Added to HttpService class.

  getpeople() {
    console.log('get people')
    let someObservable = this._http.get('people/'); // Create Observable
    someObservable.subscribe(data => console.log(data)); // Subscribe to Observable
  }
}
