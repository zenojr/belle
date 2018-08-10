import { Estabelecimento } from '../estabelecimento.model';
import { ActivatedRoute } from '@angular/router';
import { EstabelecimentoService } from '../estabelecimento.service';

import { FormsModule } from '@angular/forms';
import { ListaMenuService } from '../../../services/lista-menu.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estabelecimento-details',
  templateUrl: './estabelecimento-details.component.html',
  styleUrls: ['./estabelecimento-details.component.css']
})
export class EstabelecimentoDetailsComponent implements OnInit {

  listaEstabelecimento: Array<string>;
  itemSelected: any;
  submitted = false;
  cod: string;
  estabelecimento: Estabelecimento[];
  posts: any = [];

  constructor(
              private listaMenuService: ListaMenuService,
              private estabelecimentoService: EstabelecimentoService,
              private activatedRoute: ActivatedRoute
              ) {
  }

  ngOnInit() {
    this.cod = this.activatedRoute.snapshot.params.cod;
    this.estabelecimentoService.listarPorCod(this.cod)
    .then(
      data => this.estabelecimento = data
    );

  }

  saveEstab() {
    console.log(this.estabelecimento);
    console.log(this.estabelecimento[this.cod]);
    this.estabelecimentoService.gravar(this.estabelecimento[this.cod]);
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
  }

}
