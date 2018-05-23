import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiUrl: 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/Login/v1.0/login';
  user = {
    user: '',
    password: ''
  };

  constructor( private http: Http ) { }

  ngOnInit() {
  }

  login() {
    this.http.post('https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/Login/v1.0/login', this.user)
    .toPromise()
    .then(response => console.log(response));
  }

}


