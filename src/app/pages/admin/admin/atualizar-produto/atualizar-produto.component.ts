import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/shared/models/produtos.model';
import { ProdutosService } from 'src/app/shared/service/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
})
export class AtualizarProdutoComponent {
  produtoNaoAtualizado: boolean = false;
  produtoAtualizado: boolean = false;
  @Input()
  categoria: string = 'Prótese';
  @Input()
  descricao: string =
    'Características e benefícios Influencia positivamente os proprioceptores, o que beneficia o sistema sensório-motor Capaz de ser usado durante a reabilitação e treinamento';
  @Input()
  idproduto: string = '';
  @Input()
  nome: string =
    'ÓRTESE PARA OMBRO OMO NEUREXA PLUS PRETA DIREITO E ESQUERDO 5065N - OTTOBOCK';
  @Input()
  peso: string = '0.6';
  @Input()
  quantidade: number = 24;
  @Input()
  tamanho: string = 'M';
  @Input()
  urlimg: string =
    'https://acdn.mitiendanube.com/stores/001/097/946/products/5065n-01-1200x120011-b9245b56bd8aa95a1915849847176939-640-0.webp';
  @Input()
  valor: number = 921.32;
  @Input()
  produto: Produto = {
    nome: '',
    descricao: '',
    idproduto: '',
    peso: '',
    quantidade: 0,
    tamanho: '',
    urlimg: '',
    valor: 0,
    categoria: '',
  };

  constructor(private produtoService: ProdutosService) { }

  limparCampos() {
    this.categoria = 'Prótese';
    this.descricao = '';
    this.nome = '';
    this.peso = '';
    this.quantidade = 0;
    this.tamanho = 'P';
    this.urlimg = '';
    this.valor = 0;
  }

  atualizarProduto() {
    this.produto = {
      nome: this.nome,
      descricao: this.descricao,
      idproduto: this.idproduto,
      peso: this.peso,
      quantidade: this.quantidade,
      tamanho: this.tamanho,
      urlimg: this.urlimg,
      valor: this.valor,
      categoria: this.categoria,
    };
    this.produtoService.atualizarProduto(this.produto).subscribe((dados) => {
      console.log(dados);

      if (dados.mensagem == 'Produto atualizado com sucesso') {
        this.produtoAtualizado = true;
        setTimeout(() => {
          this.produtoAtualizado = false;
          this.limparCampos();
        }, 3000);
      } else {
        this.produtoNaoAtualizado = true;
        setTimeout(() => {
          this.produtoAtualizado = false;
        }, 3000);
      }
    });
  }
}
