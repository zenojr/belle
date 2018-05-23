import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  // data: any = {};

  // constructor(private http: Http ) {
  //   console.log('Hy API!');
  //   this.getContacts();
  //   this.getData();
  // }

  // getData() {
  //   return this.http.get(this.apiUrl).map((res: Response) => res.json());
  // }


  // getContacts() {
  //   this.getData().subscribe(data => {
  //     console.log(data);
  //     this.data = data;
  //   });
  // }

}
