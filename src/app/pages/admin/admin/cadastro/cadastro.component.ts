import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @Input()
  categoria: string = '';
  @Input()
  descricao: string = '';
  @Input()
  idproduto: string = '';
  @Input()
  nome: string = '';
  @Input()
  peso: string = '';
  @Input()
  quantidade: string = '';
  @Input()
  tamanho: string = '';
  @Input()
  urlimg: string = '';
  @Input()
  valor: string = '';
}
