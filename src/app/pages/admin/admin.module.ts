import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CadastroComponent } from './admin/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, CadastroComponent],
  exports: [AdminComponent],
  imports: [CommonModule, FormsModule],
})
export class AdminModule { }
