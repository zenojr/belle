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

  submitted = false;
  cod: string;
  estabelecimento: Estabelecimento[];

  constructor(
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
    console.log(this.cod);

  }

  saveEstab() {
    console.log('here save this sheet');
    console.log(this.estabelecimento);
    this.estabelecimentoService.gravar(this.estabelecimento[0]); // verificar melhor maneira de passar o parametro para sobre
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
  }

}
