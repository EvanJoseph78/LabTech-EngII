# ESII_api

Documentação:

rota /produtos lista todos os produtos do banco de dados.

<img src="https://i.imgur.com/dhgD7Iz.png" alt="imagem da consutla" />


modificações:

criação de endpoint com metodo 'GET' para proteses: @app.rout("/protese").
criação de endpoint com metodo 'GET' para pedidos: @app.rout("/pedidos").
criação do endpoint com metodo 'POST' para pedidos: @app.rout("/pedido").

modificação da tabela "pedido" no banco de dados para comportar as colunas:
produto_id,
nome_produto,
quantidade_produto,
tamanho_produto,
preco_produto,
valor_total
