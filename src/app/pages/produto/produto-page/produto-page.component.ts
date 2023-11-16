import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { dataFake } from '../../../data/DataFake';
import { Produto } from 'src/app/shared/models/produtos.model';
import { ProdutosService } from 'src/app/shared/service/produtos.service';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css'],
})
export class ProdutoPageComponent implements OnInit {
  produtos: Produto = {
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

  private id: string | null = '0';

  @Input()
  imagemProduto: string = '';
  @Input()
  nomeProduto: string = '';
  @Input()
  precoProduto: number = 0;
  constructor(
    private parametrizador: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef,
    private produtoService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.parametrizador.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.definirValoresParaComponent(this.id);

    this.renderer.setProperty(this.el.nativeElement, 'scrollTop', 0); // deveria rolar a página para o topo
  }

  definirValoresParaComponent(id: string | null) {
    this.produtoService.getListaProdutos().subscribe((dados) => {
      for (let index = 0; index < dados.length; index++) {
        const element = dados[index];
        if (element.idproduto == this.id) {
          this.nomeProduto = element.nome;
          this.imagemProduto = element.urlimg;
          this.precoProduto = element.valor;
        }
      }
      // this.produtos = dados.produtos[Number(id) - 1];
      // this.imagemProduto = this.produtos.urlimg;
      // this.nomeProduto = this.produtos.nome;
      // this.precoProduto = this.produtos.valor;
    });

    // const result = dataFake.filter((produto) => produto.id == id)[0];
    // const result = dataFake.filter((produto) => produto.id == id)[0];
  }
}
