import { JwtTokenService } from './jwt-token.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public check: Boolean = false;

  constructor( private jwtToken: JwtTokenService ) {
    this.check = this.jwtToken.token ? true : false; // verifica se o token existe
  }
}
