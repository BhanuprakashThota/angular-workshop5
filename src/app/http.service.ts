import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private headers: HttpHeaders) { }
  // myMethod() {
  //   return console.log('Hey, what is up!');
  // }
  getBeer() {
   // let header = this.headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get('https://api.openbrewerydb.org/breweries', 
    {headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
}
}
