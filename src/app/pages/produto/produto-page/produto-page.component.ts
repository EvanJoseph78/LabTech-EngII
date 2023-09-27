import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataFake } from '../../../data/DataFake';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css'],
})
export class ProdutoPageComponent implements OnInit {
  private id: string | null = '0';

  @Input()
  imagemProduto: string = '';
  @Input()
  nomeProduto: string = '';
  @Input()
  precoProduto: number = 0;

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {}

  ngOnInit(): void {
    this.parametrizador.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.definirValoresParaComponent(this.id);
  }

  definirValoresParaComponent(id: string | null) {
    const result = dataFake.filter((produto) => produto.id == id)[0];
    console.log(result.id);
    console.log(result.descricao);
    console.log(result.imagemProduto);
    console.log(result.nome);
  }
}
