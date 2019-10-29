# Matematica LDS Backend

Backend desenvolvido em Laravel Framework para a disciplina de Laboratório de Desenvolvimento de Software.

# Comandos 

'' php artisan jwt:secret
'' php artisan key:generate

# Rodar backend com docker-compose
'' cp .env.docker .env
'' docker-compose run --rm app php artisan migrate --seed
'' docker -f "docker-compose.yml" up -d --build --remove-orphans

## Obs. Execute os comandos abaixo no host, não no container

'' sudo chown -R www-data:www-data .
'' sudo setfacl -Rm u:{seuusuario}:rwx,d:u:{seuusuario}:rwx ./

