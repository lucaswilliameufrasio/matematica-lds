FROM php:7-fpm

RUN apt-get update && apt-get install -y apt-utils libmcrypt-dev mysql-client-* curl zip unzip
RUN pecl install mcrypt && docker-php-ext-enable mcrypt
RUN docker-php-ext-install pdo_mysql

# COPY --chown=www-data:www-data . /var/www
# RUN cp .env.example .env

WORKDIR /app
