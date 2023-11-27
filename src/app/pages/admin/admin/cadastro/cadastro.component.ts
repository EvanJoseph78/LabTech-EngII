import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/models/produtos.model';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  constructor(private movimentacaoService: MovimentacaoService) { }

  categoria: string = 'Prótese';
  descricao: string =
    'Características e benefícios Influencia positivamente os proprioceptores, o que beneficia o sistema sensório-motor Capaz de ser usado durante a reabilitação e treinamento';
  // idproduto: string = '';
  nome: string =
    'ÓRTESE PARA OMBRO OMO NEUREXA PLUS PRETA DIREITO E ESQUERDO 5065N - OTTOBOCK';
  peso: string = '0.6';
  quantidade: string = '24';
  tamanho: string = 'M';
  urlimg: string =
    'https://acdn.mitiendanube.com/stores/001/097/946/products/5065n-01-1200x120011-b9245b56bd8aa95a1915849847176939-640-0.webp';
  valor: string = '921.32';

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

    const produto: Produto = {
      nome: this.nome,
      descricao: this.descricao,
      idproduto: '',
      peso: this.peso,
      quantidade: Number(this.quantidade),
      tamanho: this.tamanho,
      urlimg: this.urlimg,
      valor: Number(this.valor),
      categoria: this.categoria,
    };

    this.movimentacaoService.adicionarProduto(produto).subscribe((res) => {
      console.log(res);
    });
  }

  limparCampos() {
    this.categoria = 'Prótese';
    this.descricao = '';
    this.nome = '';
    this.peso = '';
    this.quantidade = '';
    this.tamanho = 'P';
    this.urlimg = '';
    this.valor = '';
  }
}
