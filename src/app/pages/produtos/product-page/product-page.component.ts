import { Component, DoCheck, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/shared/service/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-card',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPage implements OnInit, DoCheck {
  // produtos = dataFake;
  produtos: Produto[] = [];
  produtosAux: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProducts().subscribe((dados) => {
      this.produtos = dados.produtos;
      this.produtosAux = dados.produtos;
    });
  }

  ngDoCheck(): void {
    this.produtosService.getNomeProdutoPesquisar().subscribe((nome) => {
      console.log(nome);
      if (nome == '') {
        this.produtos = this.produtosAux;
      } else {
        let novaLista: Produto[] = [];
        this.produtosAux.forEach((element) => {
          if (element.nome.toLowerCase().includes(nome.toLowerCase())) {
            novaLista.push(element);
          }
        });
        console.log(novaLista);
        this.produtos = novaLista;
      }
    });
  }
}
