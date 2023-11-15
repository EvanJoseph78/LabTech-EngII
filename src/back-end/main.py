import mysql.connector
from mysql.connector import Error
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# root@172.17.0.2:3306

connection = None
try:
    connection = mysql.connector.connect(
        host="172.17.0.2",
        user="root",
        passwd="root",
        database="LabTech"
        #database="dump"
    )
    print("MySQL Database connection successful")
except Error as err:
    print(f"Error: '{err}'")

"""
idproduto int PK
nome varchar(200)
valor decimal(5,2)
peso decimal(5,2)
descricao varchar(200)
tamanho varchar(45)
quantidade int
urlimg text
categoria text
"""

def select_from_produto(connection):
    cursor = connection.cursor()
    try:
        cursor.execute("SELECT * FROM produto")
        records = cursor.fetchall()
        print("Total number of rows in produto is: ", cursor.rowcount)

        print("\nPrinting each produto record")

        listaProdutos = []

        for row in records:
            listaProdutos.append(
                {
                    "idproduto": row[0],
                    "nome": row[1],
                    "valor": row[2],
                    "peso": row[3],
                    "descricao": row[4],
                    "tamanho": row[5],
                    "quantidade": row[6],
                    "urlimg": row[7],
                    "categoria": row[8]
                }
            )

        return listaProdutos
    except Error as err:
        print(f"Error: '{err}'")
    finally:
        cursor.close()

@app.route("/produtos", methods=['GET'])
def get_produtos():
    return jsonify(produtos=select_from_produto(connection))

if __name__ == "__main__":
    app.run(port=3200, host='0.0.0.0')
