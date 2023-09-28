import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../../data/DataFake';

@Component({
  selector: 'app-card',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPage implements OnInit {
  produtos = dataFake;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((value) => console.log(value));
  }
}
