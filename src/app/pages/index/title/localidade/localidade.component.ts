import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-localidade',
  templateUrl: './localidade.component.html',
  styleUrls: ['./localidade.component.css']
})
export class LocalidadeComponent {

  @Input()
  titulo:string = "";
  @Input()
  descricao:string = "";
}
