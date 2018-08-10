import { EstabelecimentoCadastroComponent } from './components/estabelecimento/estabelecimento-cadastro/estabelecimento-cadastro.component';

import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { CampanhaComponent } from './components/campanha/campanha.component';
import { ProfExternoComponent } from './components/prof-externo/prof-externo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';

import { EstabelecimentoDetailsComponent } from './components/estabelecimento/estabelecimento-details/estabelecimento-details.component';
import { EstabecimentoComponent } from './components/estabelecimento/estabelecimento.component';
import { AuthGuardRouterService } from './services/auth-guard-router.service';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ComissaoComponent } from './components/comissao/comissao.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdEstab',
        component: EstabecimentoComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'estabelecimento-cadastrar',
        component: EstabelecimentoCadastroComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'estabelecimento-details/:cod',
        component: EstabelecimentoDetailsComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdUsuario',
        component: UsuarioComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdUsuario-form/:login',
        component: UsuarioFormComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdEspecialidade',
        component: EspecialidadesComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdComissao',
        component: ComissaoComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdCliente',
        component: ClientesComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdProfExt',
        component: ProfExternoComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'mdCampanha',
        component: CampanhaComponent,
        canActivate: [AuthGuardRouterService]
    },

];

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export default routing;
