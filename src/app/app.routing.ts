import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { EstabelecimentoDetailsComponent } from './components/estabecimento/estabelecimento-details/estabelecimento-details.component';
import { EstabecimentoComponent } from './components/estabecimento/estabecimento.component';
import { AuthGuardRouterService } from './services/auth-guard-router.service';
import { HomeComponent } from './components/home/home.component';


import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
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
        path: 'Estabelecimento',
        component: EstabecimentoComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: 'estabelecimento-details',
        component: EstabelecimentoDetailsComponent,
        canActivate: [AuthGuardRouterService]
    },
];

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export default routing;
