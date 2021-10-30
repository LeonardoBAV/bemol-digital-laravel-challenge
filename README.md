# Desafio Back End Laravel

Este é um projeto laravel, que tem como desafio a implementação de uma API para o gerenciamento de Clientes/Usuários.

## Instalação

### Requisitos
- docker
- curl

É importante que a porta 80 esteja liberada, pois por padrão o sail utiliza o docker para rodar nesta porta. Para a instalação siga os comandos abaixo:

```sh
curl -s https://laravel.build/example-app | bash
cd example-app
./vendor/bin/sail up -d
./vendor/bin/sail composer require leonardobav/bemoldigitallaravelchallenge-module
./vendor/bin/sail artisan module:enable
./vendor/bin/sail artisan migrate
```

- Descrição do que cada comando realiza
    - 1- Download da versão limpa do Laravel
    - 2- Entrar na pasta raiz do projeto
    - 3- Inicializar os containers pelo  Laravel Sail
    - 4- Instalar o projeto do desafio via composer
    - 5- Ativar modulo do projeto
    - 6- Subir com a estrutura do banco de dados


#### Teste
```sh
http://localhost/api/bemoldigitallaravelchallenge/
```

### Observações
Este projeto é um pacote larável que pode ser instalado também utilizando o camando:
```sh
composer require leonardobav/bemoldigitallaravelchallenge-module
```

- Pacotes Utilizados:
    - nwidart/laravel-modules
    - joshbrw/laravel-module-installer
    - guzzlehttp/guzzle
- Projeto para gerenciamento de cliente/usuário
- Projeto segue estrutura de uma arquitetura DDD, separado nas seguintes camadas
    - Application
    - Domain
    - Infrastructure
    - Presentation
- Projeto desenvolvido no lubuntu versão 21.10
