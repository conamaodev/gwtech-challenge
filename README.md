O front end do teste está disponível em [WEB](https://gwtech-web.herokuapp.com/) e a api em [API](https://gwtech-api.herokuapp.com/)

## Rodando o projeto localmente

- Clone o repositório
```
   git clone https://github.com/Cagativo/gwtech-challenge.git
```

- Acesse a pasta da api e instale as dependências
```
   cd gwtech-challenge/api
   npm i
```

- Rode a api
```
   // Caso queira rodar os testes antes, utilize npm run test
   npm start
```

- Abra outro terminal, acesse a pasta front e instale as dependencias
```
   cd gwtech-challenge/front
   yarn install
```

- Rode o front e acesse no navegador
```
   yarn start
   Acesse http://localhost:3000
```

## Problema encontrado

Percebi que a api do teste aceitava query strings, porém não foi viavel utilizar porque o servidor parava de responder em certas chamadas, como por exemplo [AQUI](http://jsonplaceholder.typicode.com/posts?userId=7)