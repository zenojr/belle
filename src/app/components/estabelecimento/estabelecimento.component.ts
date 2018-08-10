import { Estabelecimento } from './estabelecimento.model';
import { EstabelecimentoService } from './estabelecimento.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-estabecimento',
  templateUrl: './estabecimento.component.html',
  styleUrls: ['./estabecimento.component.css']
})
export class EstabecimentoComponent implements OnInit {

estabelecimento: Estabelecimento[];

constructor(
  private estabelecimentoService: EstabelecimentoService
            ) {}

ngOnInit() {
  this.listar();
}

listar() {
  this.estabelecimentoService.listar()
  .then(
    data => this.estabelecimento = data
  );
}

}
