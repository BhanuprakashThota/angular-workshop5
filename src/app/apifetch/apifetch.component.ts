import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-apifetch',
  templateUrl: './apifetch.component.html',
  styleUrls: ['./apifetch.component.scss']
})
export class APIFetchComponent implements OnInit {

brews: Object;

  //constructor(private _http: HttpService) { }
  constructor(private http: HttpClient, private headers: HttpHeaders) { }

  ngOnInit() {

    // this._http.getBeer().subscribe(data => {
    //   this.brews = data
    //   console.log(this.brews);
    // }
  //);

  this.http.get('https://api.openbrewerydb.org/breweries', 
    {headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*')}).subscribe();
  }

}
 