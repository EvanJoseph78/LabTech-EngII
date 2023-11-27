import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  categoria: string = 'Prótese';
  descricao: string = 'Descriçao de um produto ficticio';
  // idproduto: string = '';
  nome: string = 'Produto ficticio';
  peso: string = '10';
  quantidade: string = '11';
  tamanho: string = 'P';
  urlimg: string = 'teste.com';
  valor: string = '22.0';

  adicionarProduto() {
    const dados = {
      nome: this.nome,
      categoria: this.categoria,
      valor: this.valor,
      quantidade: this.quantidade,
      tamanho: this.tamanho,
      urlimg: this.urlimg,
      peso: this.peso,
      descricao: this.descricao,
    };
  }
}
