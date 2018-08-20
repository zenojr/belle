import { Estabelecimento } from './estabelecimento.model';
import { EstabelecimentoService } from './estabelecimento.service';
import { Component, OnInit} from '@angular/core';
 
@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {
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
