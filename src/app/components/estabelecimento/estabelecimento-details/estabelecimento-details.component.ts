import { Estabelecimento } from '../estabelecimento.model';
import { ActivatedRoute } from '@angular/router';
import { EstabelecimentoService } from '../estabelecimento.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  cod: string;
  estabelecimento: Estabelecimento;

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log('teste');
    this.cod = this.activatedRoute.snapshot.params.cod;
    console.log('testte 2');
    if (!this.cod) {
      this.estabelecimento = new Estabelecimento();
    } else {
      this.estabelecimentoService.listarPorCod(this.cod)
      .then(
        data => this.estabelecimento = data[0]
      );
      console.log(this.cod);
    }

  }

  saveEstab() {
    console.log('here save this sheet');
    console.log(this.estabelecimento);
    this.estabelecimentoService.gravar(this.estabelecimento); // verificar melhor maneira de passar o parametro para sobre
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
  }

}
