import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
    this.getAbilities();
  }


  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe((data:any) => {
      console.log("Pokemon Bulbasaur Data", data);
      let abilityString = data.name + " Abilities:"
      let abilityURL = data.name + " URL: "
      for(var i=0;i<data.abilities.length;i++){
        abilityString += data.abilities[i].ability.name + ' ';
        abilityURL += data.abilities[i].ability.url + ' ';
      }
      console.log(abilityString);
      console.log(abilityURL);
    });
  }

  getAbilities(){
    let chlorophyll = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    chlorophyll.subscribe((data:any) => {
      console.log("Pokemon Who have Chlorophyll Ability ", data);
      let names;
      for(var i=0;i<data['pokemon'].length;i++){
        names += data['pokemon'][i].pokemon.name + ' ';
      }
      console.log(names);
    });
  }
}