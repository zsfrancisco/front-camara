import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { ReglogComponent } from './pages/reglog/reglog.component';
import { ReservaComponent } from './pages/reserva/reserva.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'otros', component: OtrosComponent },
  { path: 'home/reglog', component: ReglogComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
