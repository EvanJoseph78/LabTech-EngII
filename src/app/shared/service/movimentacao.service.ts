import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovimentacaoService {
  listaSaidaProdutos: any = [
    {
      data: '10-10-10',
      classificacao: 'protese',
      nome: 'Braço robótico',
      quantidade: 2,
      custoUnitario: 10,
    },
    {
      data: '10-10-10',
      classificacao: 'protese',
      nome: 'Perna robótica',
      quantidade: 6,
      custoUnitario: 10,
    },
    {
      data: '10-10-11',
      classificacao: 'protese',
      nome: 'Perna robótica',
      quantidade: 6,
      custoUnitario: 10,
    },
    {
      data: '10-10-12',
      classificacao: 'eletronico',
      nome: 'Smartphone',
      quantidade: 10,
      custoUnitario: 300,
    },
  ];

  constructor() {}
}
