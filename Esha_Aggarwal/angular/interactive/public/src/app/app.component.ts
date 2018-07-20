
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MEAN';
  quotes: string;
  onequote: string;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.quotes ='';
  }
  getNamesFromService(){
    let observable = this._httpService.getQuotes()
    observable.subscribe(data => {
      this.quotes = data['data']
    })
  }
  getQuoteFromService(id){
    console.log(id)
    let observable = this._httpService.getThing(id)
    observable.subscribe(data => {
     this.onequote= data['data']
    })
  }
}

