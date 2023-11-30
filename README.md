# FrontEcommerce - Instruções de Desenvolvimento

Este projeto foi executado durante a disciplina de engenharia de software da Universida Federal do Pará

## Pré-requisitos

- Node.js
- Angular CLI

Certifique-se de ter o Node.js e o Angular CLI instalados em seu sistema antes de prosseguir.

## Instalação de Dependências

Após clonar o projeto, navegue até o diretório raiz e execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Execução do Projeto

Com as dependências instaladas, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash

ng serve

```

Isso iniciará o servidor de desenvolvimento e o FrontEcommerce estará acessível em http://localhost:4200/. Abra seu navegador e acesse esse endereço para visualizar a aplicação.

Banco de Dados

O script do banco de dados está localizado em src/banco/Dump20231128LabTech. Certifique-se de executar esse script no MySQL para configurar o banco de dados necessário para o projeto.

Ao executar o banco MySQL, configure as variáveis de ambiente do banco no arquivo .env.

Configuração do Banco de Dados
No arquivo .env, configure as variáveis relacionadas ao banco de dados conforme necessário. Exemplo:

```bash

DB_HOST=seu-host
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=seu-banco

```

## Back-End

cd /src/Back-End

dependecias python3

crie ambiente virtual python

execute o ambiente virtual source

instale as dependecias python install requirements

execute o programa python main.py

## Back-End

Para configurar e executar o Back-End, siga as instruções abaixo:

### Pré-requisitos

- Python 3

### Configuração do Ambiente Virtual

1. Navegue até o diretório src/Back-End:

```bash
cd /src/Back-End

```

2. Crie um ambiente virtual Python:

```bash
python3 -m venv venv
Ative o ambiente virtual:

```

No Linux/macOS:

```bash
source venv/bin/activate

```

```bash
No Windows:

```

```bash
.\venv\Scripts\activate

```

### Instalação de Dependências

3. Instale as dependências Python:

```bash
pip install -r requirements.txt

```

4. Execução do Programa

Execute o programa Python:

```bash
python main.py

```

### Documentação

[Documentação LabTech](src/assets/documentacao/LabTech.pdf)
