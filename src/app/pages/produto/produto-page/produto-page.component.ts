import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css'],
})
export class ProdutoPageComponent {
  // Importando o módulo ActivatedRoute do Angular
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    // No construtor, injetamos o serviço ActivatedRoute
    // e, em seguida, assinamos o Observable de parâmetros da rota
    this.parametrizador.params.subscribe((res) => console.log(res));
    // Quando os parâmetros da rota mudarem, a função de retorno de chamada será executada,
    // exibindo os parâmetros no console.

    // Assinatura de um Observable para capturar e exibir os parâmetros da consulta (query parameters) de uma URL
    this.parametrizador.queryParams.subscribe((res) => console.log(res));
    // Quando ocorrem alterações nos parâmetros de consulta da URL, a função de retorno de chamada é executada,
    // exibindo esses parâmetros no console.
  }
}
