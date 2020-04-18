import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-apifetch',
  templateUrl: './apifetch.component.html',
  styleUrls: ['./apifetch.component.scss']
})
export class APIFetchComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

}