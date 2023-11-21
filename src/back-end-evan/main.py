import mysql.connector
from flask import Flask, make_response, jsonify, request
from flask_cors import CORS

try:
    mydb = mysql.connector.connect(
        host='172.17.0.2',
        user='root',
        password='root',
        database='dump1'
    )
    print("MySQL Database connection successful")
except Exception as e:
    print(f"Error: '{e}'")
    raise e


app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/pedidos": {"origins": "http://localhost:4200"}})
app.config['JSON_SORT_KEYS'] = False


@app.route('/produtos', methods=['GET'])
def get_produtos():

    my_cursor = mydb.cursor()

    try:

        my_cursor.execute('SELECT * FROM produto')
        lista_produtos = my_cursor.fetchall()

        produtos = []

        for produto in lista_produtos:
            produtos.append(
                {
                    "idproduto": produto[0],
                    "nome": produto[1],
                    "valor": produto[2],
                    "peso": produto[3],
                    "descricao": produto[4],
                    "tamanho": produto[5],
                    "quantidade": produto[6],
                    "urlimg": produto[7],
                    "categoria": produto[8]
                }
            )

        return make_response(
            jsonify(
                produtos=produtos
            )
        )

    except Exception as e:
        raise e
    finally:
        my_cursor.close()


@app.route('/pedido', methods=['POST'])
def criar_pedido():
    my_cursor = mydb.cursor()
    try:
        pedido = request.json

        idcliente = pedido['idcliente']
        listapedido = pedido['listapedido']
        valorfrete = pedido['valorfrete']
        valortotalpedido = pedido['valortotalpedido']

        for item in listapedido:
            sql = f"INSERT INTO pedido(idcliente, idproduto, quantidadeproduto, precoproduto, subtotal, valorfrete, valortotalpedido) VALUES('{idcliente}', '{item['idproduto']}', '{item['quantidadeproduto']}', '{item['precoproduto']}', '{item['subtotal']}', '{valorfrete}', '{valortotalpedido}')"
            my_cursor.execute(sql)
            print(item['idproduto'])

        mydb.commit()

        return make_response(jsonify(
            mensagem='Pedido criado',
            pedido=pedido
        ))

    except Exception as e:
        print(e)
        raise e
    finally:
        my_cursor.close()


app.run()
