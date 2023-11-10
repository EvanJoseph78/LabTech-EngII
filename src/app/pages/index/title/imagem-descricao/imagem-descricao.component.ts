import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem-descricao',
  templateUrl: './imagem-descricao.component.html',
  styleUrls: ['./imagem-descricao.component.css']
})
export class ImagemDescricaoComponent {

  @Input()
  url:string = "";
  @Input()
  alt:string = "";
  @Input()
  descricao:string = "";
}
