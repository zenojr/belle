import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key, value) { // define a key no localStorage
    window.localStorage[key] = value; // acessando localStorage como objt e setando a key
    return this; // retornando o obj da localstorage inteiro
  }

  get(key, defaultValue = null) {
    return window.localStorage[key] || defaultValue;
  }

  setObject(key, value: [Object]) { // working with objects
    window.localStorage[key] = JSON.stringify(value);
  }

  getObject(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  remove(key) {
    window.localStorage.removeItem(key);
    return this;
  }
}
