import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  login: string = null;
  usuario: Usuario;
  redirect = [ '/mdUsuario' ];

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('teste Usuario');
    this.login = this.activatedRoute.snapshot.params.login;
    if (!this.login) {
      this.usuario = new Usuario();
      this.form = this.fb.group({
        login: [ '', Validators.required],
        nome: [ '', Validators.required],
        email: '' ,
        fone: '' ,
        permAgendar: '' ,
        ativo: '' ,
        lbAtivo: '' ,
        cor: '' ,
        senha: ''
      });
    } else {
      this.usuarioService.listarPorLogin(this.login)
      .then(
        data => {
          this.usuario = data[0];
          this.form = this.fb.group({
            login: [this.usuario.login, Validators.required],
            nome: [ this.usuario.nome, Validators.required ],
            email: this.usuario.email,
            fone: this.usuario.fone,
            permAgendar: this.usuario.permAgendar,
            ativo: this.usuario.ativo,
            lbAtivo: this.usuario.lbAtivo,
            cor: this.usuario.cor,
            senha: this.usuario.senha
          });
        }
      );
      console.log(this.login);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.usuarioService.gravar(this.usuario)
      .then(
       () => {
        this.router.navigate(this.redirect);
        }
      ) ;

    } else {
      alert('Por favor preencha os campos obrigatórios!');
    }
    console.log(this.usuario);
  }

}
