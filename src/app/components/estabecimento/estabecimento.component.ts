import { Estabelecimento } from './estabelecimento.model';
import { EstabelecimentoService } from './estabelecimento.service';
import { ListaMenuService } from '../../services/lista-menu.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-estabecimento',
  templateUrl: './estabecimento.component.html',
  styleUrls: ['./estabecimento.component.css']
})
export class EstabecimentoComponent implements OnInit {

estabelecimento: Estabelecimento;
listaNova: any = [];
eventosEstab: any;
eventos: Array<any>;

constructor(
              private listaMenuService: ListaMenuService,
              private estabelecimentoService: EstabelecimentoService

            ) {
}

ngOnInit() {
  this.listar();
}

selecionaItem(cod) {
  console.log(cod);

  // this.listaMenuService.codEstabelecimento = event;

}

listar() {
  this.estabelecimentoService.listar()
  .then(
    data => this.estabelecimento = data
  );
}

}
