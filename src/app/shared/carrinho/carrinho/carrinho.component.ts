import { Component } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { OrdemPedido } from '../../models/ordemPedidoModel';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  carrinhoAtivo: boolean = true;

  ordemDePedido: OrdemPedido = {
    client_id: 0,
    lista_produtos: [],
    valor_total: 0,
  };

  valorMaisFrete: number = 0;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.carrinhoService.getListaPedidosProdutos().subscribe((listaPedidos) => {
      // Assumindo que a resposta do serviço segue a estrutura da OrdemPedido
      this.ordemDePedido = listaPedidos;
      this.valorMaisFrete = Number((listaPedidos.valor_total + 10).toFixed(2));
    });
  }
  abrirCarrinhoDeCompras() {
    this.carrinhoService
      .getEstadoCarrinho()
      .subscribe((estadoCarrinhoComponent) => {
        this.carrinhoAtivo = estadoCarrinhoComponent;
      });
  }
}
