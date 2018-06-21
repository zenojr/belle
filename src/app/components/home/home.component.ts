import { JwtTokenService } from './../../services/jwt-token.service';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor( private http: Http,
               private jwtToken: JwtTokenService,
               private auth: AuthService
             ) {
              console.log(this.auth.check);
             }

  ngOnInit() {
  }
}
