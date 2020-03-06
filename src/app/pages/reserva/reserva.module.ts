import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReservaComponent } from './reserva.component';



@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class ReservaModule { }
