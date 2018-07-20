import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { $ } from '../../node_modules/protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // animal = []; 
  animals : Object;
  animal : Object;

  constructor(private _http:HttpService){}

  ngOnInit(){
    // this.getAnimalsFromService()
  }

  getAnimalsFromService(){
    let observable = this._http.getAnimals();
    observable.subscribe(data=>{
      console.log(data);
      this.animals = data['animals'];
    });
  }
  
  getAnimalFromService(id){
    let observable = this._http.getAnimal(id);
    observable.subscribe(data=>{
      console.log(data);
      this.animal = data['animal'];
    });
  }
}