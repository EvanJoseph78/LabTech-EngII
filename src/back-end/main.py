import mysql.connector
from flask import Flask, jsonify, request, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Carrega variáveis de ambiente a partir do arquivo .env
load_dotenv()

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/pedidos": {"origins": "http://localhost:4200"}})
app.config['JSON_SORT_KEYS'] = False
app.secret_key = os.getenv('SECRET_KEY')

db_config = {
    "host": os.getenv('DATABASE_HOST'),
    "user": os.getenv('DATABASE_USER'),
    "passwd": os.getenv('DATABASE_PASSWORD'),
    "database": os.getenv('DATABASE_NAME'),
}

connection = mysql.connector.connect(**db_config)
print("banco de dados conectado com sucesso")


@app.route("/cadastro", methods=['POST'])
def fazer_cadastro():
    dados_json = request.get_json()
    print(dados_json)

    try:
        with connection.cursor() as cursor:
            senha_criptografada = generate_password_hash(dados_json["senha"])
            query = "INSERT INTO cliente (nome,cpf,cep,email,senha) VALUES (%s,%s,%s,%s,%s)"
            values = (
                dados_json["nome"],
                dados_json["cpf"],
                dados_json["cep"],
                dados_json["email"],
                senha_criptografada

            )
            cursor.execute(query, values)
            connection.commit()
            return jsonify({"mensagem": "usuário cadastrado com sucesso"})
    except Exception as e:
        print(e)
        return jsonify({"mensagem": f"erro ao adicionar usuario{str(e)}"})


@app.route("/login", methods=['POST'])
def fazer_login():
    dados_json = request.get_json()

    try:
        with connection.cursor() as cursor:
            query = "SELECT * FROM cliente WHERE email = %s"
            cursor.execute(query, (dados_json["email"],))
            user = cursor.fetchone()

            if user and check_password_hash(user[5], dados_json['senha']):
                session['idcliente'] = user[0]
                session['email'] = user[4]
                return jsonify({"mensagem": "Login bem-sucedido",
                                "idcliente": session['idcliente']})
            else:
                return jsonify({"mensagem": "Credenciais inválidas"})
    except Exception as e:
        return jsonify({"mensagem": f"Erro ao fazer login: {str(e)}"})


@app.route("/logout", methods=['GET'])
def fazer_logout():
    session.clear()
    return jsonify({"mensagem": "Logout bem-sucedido"})


@app.route("/pedido", methods=['POST'])
def fazer_pedido():
    dados_json = request.get_json()

    listaPedidos = dados_json['listapedido']

    try:
        with connection.cursor() as cursor:
            query = "INSERT INTO ordem_pedido(cliente_idcliente, valor_total , valor_frete) VALUES (%s, %s, %s)"
            values = (
                dados_json["idcliente"],
                dados_json["valortotalpedido"],
                dados_json["valorfrete"],
            )
            cursor.execute(query, values)
            connection.commit()

            id_inserido = cursor.lastrowid

            for item in listaPedidos:
                print(item)
                query = "INSERT INTO produto_ordem_pedido(ordem_pedido_id, idproduto, quantidadeproduto, subtotal) VALUES (%s, %s, %s, %s)"
                values = (
                    id_inserido,
                    item['idproduto'],
                    item['quantidadeproduto'],
                    item['subtotal']
                )
                cursor.execute(query, values)

            connection.commit()

            return jsonify({"mensagem": "Produto adicionado com sucesso"})
    except Exception as e:
        return jsonify({"erro": f"Erro ao adicionar produto: {str(e)}"})


def select_from_pedidos():
    cursor = connection.cursor()
    try:
        cursor.execute("SELECT * FROM pedido")
        records = cursor.fetchall()
        print("Total number of rows in pedido is: ", cursor.rowcount)

        print("\nPrinting each pedido record")

        listaPedido = []

        for row in records:
            listaPedido.append(
                {
                    "produto_id": row[0],
                    "nome_produto": row[1],
                    "quantidade_produto": row[2],
                    "tamanho_produto": row[3],
                    "preco_produto": row[4],
                    "valor_total": row[5],

                },
            )

        return listaPedido
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter dados de protese: {str(e)}"})
    finally:
        if connection.is_connected():
            cursor.close()


@app.route("/admin/adicionar/produto", methods=['POST'])
def adicionar_produto():
    dados_json = request.get_json()

    try:
        with connection.cursor() as cursor:
            query = "INSERT INTO produto(nome, valor , peso, descricao, tamanho, quantidade, urlimg, categoriaProduto) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
            values = (
                dados_json["nome"],
                dados_json["valor"],
                dados_json["peso"],
                dados_json["descricao"],
                dados_json["tamanho"],
                dados_json["quantidade"],
                dados_json["urlimg"],
                dados_json["categoria"],
            )

            cursor.execute(query, values)

            connection.commit()

            return jsonify({"mensagem": "Produto adicionado com sucesso"})
    except Exception as e:
        return jsonify({"erro": f"Erro ao adicionar produto: {str(e)}"})


@app.route("/admin/atualizar/produto", methods=['POST'])
def atualizar_produto():
    dados_json = request.get_json()

    try:
        with connection.cursor() as cursor:
            query = "UPDATE produto SET nome = %s, valor = %s, peso = %s, descricao = %s, tamanho = %s, quantidade = %s, urlimg = %s, categoriaProduto = %s WHERE idproduto = %s"
            values = (
                dados_json["nome"],
                dados_json["valor"],
                dados_json["peso"],
                dados_json["descricao"],
                dados_json["tamanho"],
                dados_json["quantidade"],
                dados_json["urlimg"],
                dados_json["categoria"],
                dados_json["idproduto"],
            )

            cursor.execute(query, values)

            connection.commit()

            return jsonify({"mensagem": "Produto atualizado com sucesso"})
    except Exception as e:
        return jsonify({"erro": f"Erro ao adicionar produto: {str(e)}"})


def select_from_produto():
    cursor = connection.cursor()
    try:
        cursor.execute("SELECT * FROM produto")
        records = cursor.fetchall()
        print("Total number of rows in produto is: ", cursor.rowcount)

        print("\nPrinting each produto record")

        listaprodutos = []

        for row in records:
            listaprodutos.append(
                {
                    "idproduto": row[0],
                    "nome": row[1],
                    "valor": row[2],
                    "peso": row[3],
                    "descricao": row[4],
                    "tamanho": row[5],
                    "quantidade": row[6],
                    "urlimg": row[7],
                    # Adicionando a nova coluna "categoria"
                    "categoria": row[8],
                },
            )

        return listaprodutos
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter dados de produto: {str(e)}"})
    finally:
        if connection.is_connected():
            cursor.close()


def select_from_movimentacao_saida():
    cursor = connection.cursor()
    try:
        cursor.execute("SELECT * FROM movimentacao_saida;")
        records = cursor.fetchall()
        print("Total number of rows in produto is: ", cursor.rowcount)

        print("\nPrinting each produto record")

        listaprodutos = []

        for row in records:
            listaprodutos.append(
                {
                    "data": row[0],
                    "classificacao": row[1],
                    "nome": row[2],
                    "quantidade": row[3],
                    "custoUnitario": row[4],
                    "subtotal": row[5],
                },
            )

        return listaprodutos
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter dados de produto: {str(e)}"})
    finally:
        if connection.is_connected():
            cursor.close()


def select_from_produto_estoque():
    cursor = connection.cursor()
    try:
        cursor.execute(
            "SELECT idproduto, nome, quantidade FROM produto;")
        records = cursor.fetchall()
        print("Total number of rows in produto is: ", cursor.rowcount)

        print("\nPrinting each produto record")

        listaprodutos = []

        for row in records:
            listaprodutos.append(
                {
                    "idproduto": row[0],
                    "nome": row[1],
                    "quantidade": row[2]
                },
            )

        return listaprodutos
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter dados de produto: {str(e)}"})
    finally:
        if connection.is_connected():
            cursor.close()


@app.route("/admin/estoque", methods=['GET'])
def get_produto_estoque():
    return jsonify(estoque_produtos=select_from_produto_estoque())


@app.route("/admin/movimentacao/saida", methods=['GET'])
def get_movimentacao_saida():
    return jsonify(movimentacao_saida=select_from_movimentacao_saida())


@app.route("/produtos", methods=['GET'])
def get_produtos():
    return jsonify(produtos=select_from_produto())


@app.route("/pedidos", methods=['GET'])
def get_pedidos():
    return jsonify(pedidos=select_from_pedidos())


if __name__ == "__main__":
    port = int(os.getenv('FLASK_PORT', 5000))
    host = os.getenv('FLASK_HOST', '0.0.0.0')
    app.run(port=port, host=host)
