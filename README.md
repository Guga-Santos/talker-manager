# Boas-vindas ao repositório do projeto Talker Manager!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você irá construir uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso você deverá:
  1. Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
  2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  
  * Este projeto é individual
  * São `X` dias de projeto
  * Data para entrega final do projeto: `dd/mm/yyyy - 14:00h`

</details>

# Orientações

<details>
  <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho na dica:** 

  A extensão `Remote - Containers` do VS Code (que estará na seção de extensões recomendadas do programa) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.

</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-0x-project-talker-manager.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-project-talker-manager`

  2. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-0x-project-talker-manager`

  3. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  4. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-talker-manager`

  5. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-talker-manager/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-talker-manager/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_ de seus colegas, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
</details>

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

  Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Usaremos o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

  Este projeto já vem configurado e com suas dependências

  ### Executando todos os testes

  Para poder executar os testes, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os seus testes serão executados.

  ### Executando um teste específico

  Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

  Ex: Para executar o teste referente ao **login**, basta digitar `npm test login`.

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

:warning: **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

<details>
  <summary><strong>⚠️ Observações importantes!</strong></summary><br />

  1. Com exceção do requisito 3, todos os outros requisitos deverão ser feitos utilizando o módulo `fs`.

  2. O arquivo `talker.json` será utilizado como base para fazer as requisições da API. As operações de leitura e escrita dos requisitos devem ser feitas nesse arquivo usando os métodos da biblioteca `fs`.

  3. Há um arquivo `index.js` no repositório. Não remova, nele, o seguinte trecho de código:
  

  ```javascript
      app.get('/', (_request, response) => {
        response.status(HTTP_OK_STATUS).send();
      });
  ```

  Isso está configurado para o avaliador funcionar. 😅

  4. Você pode usar o comando `npm run restore` para restaurar o arquivo `talker.json` para seu estado inicial.

  5. Ao se deparar com o erro de que a porta já está em uso: `EADDRINUSE: address already in use 0.0.0.0:3000`, execute em seu terminal `killall -9 node` isso finalizá todas as execuções do node.

</details>

---

## 1 - Crie o endpoint GET `/talker`

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e um array com todas as pessoas palestrantes cadastradas. Exemplo: </summary><br />

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```
  
</details>

<details>
  <summary>Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o <code>status 200</code> e um array vazio. Exemplo:</summary><br />

  ```json
  []
  ```
</details>


## 2 - Crie o endpoint GET `/talker/:id`

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e uma pessoa palestrante com base no <code>id</code> da rota. Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:</summary><br />

  ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```
</details>


<details>
  <summary>Caso não seja encontrada uma pessoa palestrante com base no <code>id</code> da rota, a requisição deve retornar o <code>status 404</code> com o seguinte corpo:</summary><br />
  
  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```
</details>

## 3 - Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

<details>
  <summary>O <strong>corpo da requisição</strong> deverá ter seguinte formato:</summary><br />

  ```json
  {
    "email": "email@email.com",
    "password": "123456"
  }
  ```
</details>
  
<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />
  
  - O endpoint deverá retornar um código de `status 200` com o token gerado e o seguinte corpo:

  ```json
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```

  - O endpoint deve retornar um token aleatório a cada vez que for acessado.
  
</details>


## 4 - Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.

<details>
  <summary>As regras de validação são:</summary><br />

  - o campo `email` é obrigatório;
  - o campo `email` deve ter um email válido;
  - o campo `password` é obrigatório;
  - o campo `password` deve ter pelo menos 6 caracteres.

</details>
  
<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - Caso o campo `email` não seja passado ou esteja vazio, retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O campo \"email\" é obrigatório"
  }
  ```

  - Caso o email passado não seja válido, retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O \"email\" deve ter o formato \"email@email.com\""
  }
  ```

  - Caso o campo `password` não seja passado ou esteja vazio retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O campo \"password\" é obrigatório"
  }
  ```

  - Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O \"password\" deve ter pelo menos 6 caracteres"
  }
  ```

</details>


## 5 - Crie o endpoint POST `/talker`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

  - O campo `talk` deverá ser um objeto com as chaves `watchedAt` e `rate`:

  - O campo `talk` é obrigatório.

      - Caso o campo não seja informado retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"talk\" é obrigatório"
        }
        ```
      
  - A chave `watchedAt` é obrigatória.  

    - Caso a chave não seja informada ou esteja vazia retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" é obrigatório"
      }
      ```

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeite o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
      }
      ```

  - O campo `rate` é obrigatório.  

    - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" é obrigatório"
      }
      ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```  
  
- Caso esteja tudo certo, retorne o `status 201`  e a pessoa cadastrada.
  
- O endpoint deve retornar o `status 201` e a pessoa palestrante que foi cadastrada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

</details>


## 6 - Crie o endpoint PUT `/talker/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

  - O corpo da requisição deverá ter o seguinte formato:

    ```json
    {
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    }
    ```

  - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

    - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

    - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

  - O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

    - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"name\" é obrigatório"
      }
      ```

    - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O \"name\" ter pelo menos 3 caracteres"
      }
      ```

  - O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

    - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"age\" é obrigatório"
      }
      ```

    - Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "A pessoa palestrante deve ser maior de idade"
      }
      ```

  - O campo `talk` deverá ser um objeto com as chaves `watchedAt` e `rate`:

    - O campo `talk` é obrigatório.

        - Caso o campo não seja informado retorne `status 400`, com o seguinte corpo:

          ```json
          {
            "message": "O campo \"talk\" é obrigatório"
          }
          ```
        
    - A chave `watchedAt` é obrigatória.  

      - Caso a chave não seja informada ou esteja vazia retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"watchedAt\" é obrigatório"
        }
        ```

    - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

      - Caso a data não respeite o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
        }
        ```

    - O campo `rate` é obrigatório.  

      - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"rate\" é obrigatório"
        }
        ```

    - A chave `rate` deve ser um inteiro de 1 à 5.

      - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
        }
        ```
        
  - Caso esteja tudo certo, retorne o `status 200` e a pessoa editada.
  - O endpoint deve retornar o `status 200` e a pessoa palestrante que foi editada, da seguinte forma:

    ```json
    {
      "id": 1,
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 4
      }
    }
    ```

</details>


## 7 - Crie o endpoint DELETE `/talker/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

    - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

    - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

  - O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.

</details>
  
## 8 - Crie o endpoint GET `/talker/search?q=searchTerm`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

  - O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o seguinte corpo:

    ```
    /search?q=Da
    ```

    ```json
    [
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 5,
        },
      }
    ]
    ```

  - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

    - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

    - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

  - Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

  - Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

  **Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação

</details>
