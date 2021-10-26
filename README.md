# Projeto Laravel + Angular

## Requisitos
- docker
- curl
- npm

## Back-End Instalação
É importante que a porta 80 esteja liberada, pois por padrão o sail utiliza o docker para rodar nesta porta
```sh
curl -s https://laravel.build/example-app | bash
cd example-app
./vendor/bin/sail up -d
./vendor/bin/sail composer require leonardobav/bemoldigitallaravelchallenge-module
./vendor/bin/sail artisan module:enable
./vendor/bin/sail artisan migrate
```
TESTE
```sh
http://localhost/api/bemoldigitallaravelchallenge/
```
## Front-End Instalação
A partir da pasta root da instalação do Laravel executa os comandos abaixo:
```sh
cd Modules/Bemoldigitallaravelchallenge/Presentation/Angular/ 
npm install 														
npm install -g @angular/cli									
ng serve
```
ACESSAR
```sh
http://localhost:4200
```

Observações
- Projeto para gerenciamento de cliente/usuário
- Projeto segue estrutura de uma arquitetura DDD
- Projeto Angular que consome a API esta embutido neste repositório
- Projeto desenvolvido no lubuntu versão 21.10
