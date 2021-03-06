import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  products() {
    return this._http.get('/products');
  }

  createProducts(product: Object) {
    return this._http.post('/products', product);
  }
}
