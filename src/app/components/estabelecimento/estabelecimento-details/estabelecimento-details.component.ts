import { Estabelecimento } from '../estabelecimento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EstabelecimentoService } from '../estabelecimento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaMenuService } from '../../../services/lista-menu.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estabelecimento-details',
  templateUrl: './estabelecimento-details.component.html',
  styleUrls: ['./estabelecimento-details.component.css']
})
export class EstabelecimentoDetailsComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  cod: string = null;
  estabelecimento: Estabelecimento;
  redirect = [ '/mdEstab' ];

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  
  ngOnInit() {
    console.log('teste');
    this.cod = this.activatedRoute.snapshot.params.cod;
    console.log('testte 2');
    if (!this.cod) {
      this.estabelecimento = new Estabelecimento();
      this.form = this.fb.group({
        nome: [ '', Validators.required],
        razao: [ '', Validators.required],
        estab: '',
        cod: '',
        cnpj: '',
        lograd: '',
        num: '',
        uf: '',
        cidade: '',
        cep:  '',
        email: '',
        tel1: '',
        tel2: '',
        fax: '',
        contato: '',
        padrao: '',
        movEstoque: '',
        relAuto: '',
        cod_cid: '',
        ativo: ''
      });
    } else {
      this.estabelecimentoService.listarPorCod(this.cod)
      .then(
        data => {
          this.estabelecimento = data[0];
          this.form = this.fb.group({
          nome: [this.estabelecimento.nome, Validators.required],
          razao: [this.estabelecimento.razao, Validators.required],
          estab: this.estabelecimento.estab,
          cod: this.estabelecimento.cod,
          cnpj: this.estabelecimento.cnpj,
          lograd: this.estabelecimento.lograd,
          num: this.estabelecimento.num,
          uf: this.estabelecimento.uf,
          cidade: this.estabelecimento.cidade,
          cep: this.estabelecimento.cep,
          email: this.estabelecimento.email,
          tel1: this.estabelecimento.tel1,
          tel2: this.estabelecimento.tel2,
          fax: this.estabelecimento.fax,
          contato: this.estabelecimento.contato,
          padrao: this.estabelecimento.padrao,
          movEstoque: this.estabelecimento.movEstoque,
          relAuto: this.estabelecimento.relAuto,
          cod_cid: this.estabelecimento.cod_cid,
          ativo: this.estabelecimento.ativo
          });

        }
      );
      console.log(this.cod);
    }

  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.estabelecimentoService.gravar(this.estabelecimento)
      .then(
       () => {
        this.router.navigate(this.redirect);
        }
      ) ; // verificar melhor maneira de passar o parametro para sobre

    } else {
      alert('Por favor preencha os campos obrigatórios!');
    }
    console.log(this.estabelecimento);
  }




}
