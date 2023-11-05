import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../../data/DataFake';
import { ProdutosService } from 'src/app/shared/service/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-card',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPage implements OnInit {
  // produtos = dataFake;
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProducts().subscribe((dados) => {
      this.produtos = dados.produtos;
      console.log(this.produtos);
    });
  }
}
