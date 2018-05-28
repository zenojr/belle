import { Router } from '@angular/router';
import { JwtTokenService } from './../services/jwt-token.service';
import { LocalStorageService } from './../services/local-storage.service';
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

  redirectAfterLogin = ['/home'];

  constructor( private http: Http, private jwtToken: JwtTokenService, private router: Router ) {

  }

  ngOnInit() {
  }

  login() {
    this.http.post('https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/Login/v1.0/login', this.user)
    .toPromise()
    .then(response => {
          this.jwtToken.token =  response.json().token;
          this.router.navigate(this.redirectAfterLogin);
          }); // guarda o token recebido pela API no localStorage e redireciona para home
  }
}
