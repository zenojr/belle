import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../estabelecimento.model';
import { ActivatedRoute } from '@angular/router';
import { EstabelecimentoService } from '../estabelecimento.service';

import { FormsModule } from '@angular/forms';
import { ListaMenuService } from '../../../services/lista-menu.service';




@Component({
  selector: 'app-estabelecimento-cadastro',
  templateUrl: './estabelecimento-cadastro.component.html',
  styleUrls: ['./estabelecimento-cadastro.component.css']
})
export class EstabelecimentoCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
