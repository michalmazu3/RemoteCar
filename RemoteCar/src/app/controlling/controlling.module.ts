import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllingRoutingModule } from './controlling-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ControllingComponent } from './controlling.component';


@NgModule({
  declarations: [ControllingComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
        ControllingRoutingModule
  ]
})
export class ControllingModule { }
