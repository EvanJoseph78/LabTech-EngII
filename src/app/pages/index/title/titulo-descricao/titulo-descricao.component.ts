import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-descricao',
  templateUrl: './titulo-descricao.component.html',
  styleUrls: ['./titulo-descricao.component.css']
})
export class TituloDescricaoComponent {
  @Input()
  titulo:string = "";
  @Input()
  descricao:string = "";
}
