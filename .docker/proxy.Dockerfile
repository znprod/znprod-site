FROM nginx:1.9-alpine

WORKDIR /app

COPY .docker/configs/proxy-nginx.conf /etc/nginx/conf.d/default.conf