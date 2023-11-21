import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupPageComponent],
  exports: [SignupPageComponent],
  imports: [CommonModule, RouterLink, FormsModule],
})
export class SignupPageModule { }
