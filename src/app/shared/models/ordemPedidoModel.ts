export interface OrdemPedido {
  client_id: number;
  lista_produtos: {
    produto_id: number;
    nome_produto: string;
    quantidade_produto: number;
    imagem_produto: string;
    subtotal: number;
    tamanho_produto: string;
    preco_produto: number;
  }[];
  valor_total: number;
  valor_frete: number;
}
