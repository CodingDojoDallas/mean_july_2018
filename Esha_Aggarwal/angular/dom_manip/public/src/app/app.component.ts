
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
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getQuotesFromService()
    this.quotes ='';
  }
  getQuotesFromService(){
    let observable = this._httpService.getQuotes()
    observable.subscribe(data => {
      console.log("Yay quotes!", data)
      this.quotes = data['data']
    })
  }
  onButtonClick(): void { 
      console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void { 
      console.log(`Click event is working with num param: ${num}`);
      let obseravable = this._httpService.postToServer({data: num})
      obseravable.subscribe(data => console.log('Got the DATA!!', data))
  }
  onButtonClickParams(num: Number, str: String): void { 
      console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: ${event}`);
  }

}

