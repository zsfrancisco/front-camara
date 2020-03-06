import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { ReglogComponent } from './pages/reglog/reglog.component';
import { FooterComponent } from './shared/footer/footer.component';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservaModule } from './pages/reserva/reserva.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OtrosComponent,
    ReglogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReservaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
