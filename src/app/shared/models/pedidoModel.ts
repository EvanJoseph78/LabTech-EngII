export interface Pedido {
  idcliente: number;
  listapedido: {
    idproduto: number;
    quantidadeproduto: number;
    precoproduto: number;
    subtotal: number;
  }[];
  valorfrete: number;
  valortotalpedido: number;
}
