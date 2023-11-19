import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    SignupPageComponent
  ],
  exports: [
    SignupPageComponent
  ],
  imports: [
    CommonModule, RouterLink
  ]
})
export class SignupPageModule { }
