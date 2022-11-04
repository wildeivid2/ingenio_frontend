import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch : 'full' },
  { path: 'signup', component: SignupComponent, pathMatch : 'full' },
  { path: 'login', component: LoginComponent, pathMatch : 'full' },
  { path:'admin', component: DashboardComponent, pathMatch:'full', canActivate:[AdminGuard] },
  { path:'user-dashboard', component: UserDashboardComponent, pathMatch:'full', canActivate:[NormalGuard] },
  { path:'pedidos', component: PedidosComponent, pathMatch:'full', canActivate:[AdminGuard] },
  { path:'clientes', component: ClientesComponent, pathMatch:'full', canActivate:[AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
