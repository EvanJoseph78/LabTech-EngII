import mysql.connector
from flask import Flask, jsonify, request, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/pedidos": {"origins": "http://localhost:4200"}})
app.config['JSON_SORT_KEYS'] = False
app.secret_key = 'mortadela1'
db_config = {
    "host": "172.17.0.2",
    "user": "root",
    "passwd": "root",
    "database": "LabTech",
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

    if (
            "produto_id" not in dados_json
            or "nome_produto" not in dados_json
            or "quantidade_produto" not in dados_json
            or "tamanho_produto" not in dados_json
            or "preco_produto" not in dados_json
            or "valor_total" not in dados_json
    ):
        return jsonify({"erro": "Campos inválidos"})

    try:
        with connection.cursor() as cursor:
            query = "INSERT INTO pedido (nome_produto, quantidade_produto, tamanho_produto, preco_produto, valor_total) VALUES (%s, %s, %s, %s, %s)"
            values = (
                dados_json["nome_produto"],
                dados_json["quantidade_produto"],
                dados_json["tamanho_produto"],
                dados_json["preco_produto"],
                dados_json["valor_total"],
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
                },
            )

        return listaprodutos
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter dados de produto: {str(e)}"})
    finally:
        if connection.is_connected():
            cursor.close()


@app.route("/produtos", methods=['GET'])
def get_produtos():
    return jsonify(produtos=select_from_produto())


@app.route("/pedidos", methods=['GET'])
def get_pedidos():
    return jsonify(pedidos=select_from_pedidos())


if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0')
