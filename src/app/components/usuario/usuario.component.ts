import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario[];

  constructor(
              private usuarioService: UsuarioService
              ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.usuarioService.listar()
    .then(
      data => this.usuario = data
    );
    return this.usuario;
  }

}



