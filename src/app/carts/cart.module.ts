import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CartModule { }
