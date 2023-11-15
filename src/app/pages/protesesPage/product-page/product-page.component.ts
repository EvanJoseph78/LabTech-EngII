import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../../data/DataFake';
import { ProdutosService } from 'src/app/shared/service/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-card-proteses',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProtesesPage implements OnInit, DoCheck {
  // produtos = dataFake;
  produtos: Produto[] = [];
  produtosAux: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProducts().subscribe((dados) => {
      let listaProdutos: Produto[] = dados.produtos;

      listaProdutos.forEach((element) => {
        if (element.categoria == 'protese') {
          this.produtos.push(element);
        }
      });

      // this.produtos = listaProdutos;
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
