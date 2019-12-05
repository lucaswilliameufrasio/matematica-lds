#!/bin/bash

cp .env.docker .env &&
docker-compose run --rm app php artisan migrate:refresh --seed
docker-compose -f "docker-compose.yml" up -d --build --remove-orphans

sudo chown -R www-data:www-data . &&
sudo setfacl -Rm u:{seuusuario}:rwx,d:u:$USER:rwx ./

echo "Configuração finalizada"
