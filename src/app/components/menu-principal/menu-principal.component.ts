import { HttpClient } from '@angular/common/http';
import { MontaMenuService } from './../../services/monta-menu.service';
import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from './../../services/jwt-token.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  menu: Array<Object>;
  submenu: Array<Object>;

  constructor( private http: Http,
               private jwtToken: JwtTokenService,
               private auth: AuthService,
               private montaMenu: MontaMenuService,
               private httpCli: HttpClient
             ) {
             }

  ngOnInit() {
    this.getMenu();
    // this.montaMenu.query().subscribe(data => this.posts = data);
    this.getNewMenu();
  }




linkListMenu = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/listarmenu';


  getMenu() {
    const requestOptions = new RequestOptions(); // verificar uso de let ou const
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http
    .get(this.linkListMenu, requestOptions)
    .toPromise()
    .then(response => this.menu = response.json());
  }



  // tslint:disable-next-line:member-ordering
  menuUrl = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/listarmenu';

  menu2: Array<Object>;

  getNewMenu() {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http.get(this.menuUrl, requestOptions).toPromise()
    .then(response => this.submenu = response.json());



    
    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/montarmenu",
    //   "method": "GET",
    //   "headers": {
    //     "Authorization": "65325c773453",
    //     "Cache-Control": "no-cache",
    //     "Postman-Token": "4307ab40-e321-4426-8117-bb8d1355a7a0"
    //   }
    // }
    
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });

  }


}
