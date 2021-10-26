# Projeto Laravel + Angular

## Requisitos
- docker
- curl

## Back-End Instalação
É importante que a porta 80 esteja liberada, pois por padrão o sail utiliza o docker para rodar nesta porta
```sh
curl -s https://laravel.build/example-app | bash
cd example-app
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
sail up -d
sail composer require leonardobav/bemoldigitallaravelchallenge-module
sail artisan module:enable
sail artisan migrate
```
TESTE
```sh
http://localhost/api/bemoldigitallaravelchallenge/
```
## Front-End Instalação

```sh
cd Modules/Bemoldigitallaravelchallenge/Presentation/Angular/ 
npm install 														(mas talvez aqui ja instala o angular automaticamente)
npm install -g @angular/cli										(talvez nem precise)
ng serve (precisa baixar o cli angular)
```
ACESSAR
```sh
http://localhost:4200
```

Observações
- Projeto para gerenciamento de cliente/usuário
- Projeto segue estrutura de uma arquitetura DDD
- Projeto Angular que consome a API esta embutido neste repositório
