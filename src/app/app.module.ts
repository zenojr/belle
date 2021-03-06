import { ListaMenuService } from './services/lista-menu.service';
import { EditMenuService } from './services/edit-menu.service';
import { RouterModule, Routes } from '@angular/router';
import { JwtTokenService } from './services/jwt-token.service';
import { LocalStorageService } from './services/local-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import 'rxjs/add/operator/map';
import routing from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuardRouterService } from './services/auth-guard-router.service';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { CommonModule } from '@angular/common';

// import ngx-translate and the http loader
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// import ngx-bootstrap

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EstabelecimentoComponent } from './components/estabelecimento/estabelecimento.component';
import { EstabelecimentoDetailsComponent } from './components/estabelecimento/estabelecimento-details/estabelecimento-details.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ComissaoComponent } from './components/comissao/comissao.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProfExternoComponent } from './components/prof-externo/prof-externo.component';
import { CampanhaComponent } from './components/campanha/campanha.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { EstabelecimentoService } from './components/estabelecimento/estabelecimento.service';
import { ClientesDetailsComponent } from './components/clientes/clientes-details/clientes-details.component';
import { UsuarioService } from './components/usuario/usuario.service';
import { UsuarioDetailsComponent } from './components/usuario/usuario-details/usuario-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuPrincipalComponent,
    EstabelecimentoComponent,
    EstabelecimentoDetailsComponent,
    UsuarioComponent,
    EspecialidadesComponent,
    ComissaoComponent,
    ClientesComponent,
    ProfExternoComponent,
    CampanhaComponent,
    BreadcrumbComponent,
    ClientesDetailsComponent,
    UsuarioDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    AppComponent,
    LocalStorageService,
    JwtTokenService,
    AuthService,
    AuthGuardRouterService,
    EditMenuService,
    ListaMenuService,
    EstabelecimentoService,
    UsuarioService
  ],
  exports: [
    CommonModule,
    TranslateModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


