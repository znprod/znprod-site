FROM node:14 as builder

WORKDIR /app

COPY ./site-frontend/package*.json /app/site-frontend/

WORKDIR /app/site-frontend

RUN npm install

COPY ./site-frontend/ /app/site-frontend/
RUN ls -la /app/site-frontend
RUN npm run build

FROM nginx:1.9-alpine

WORKDIR /app

COPY --from=builder /app/site-frontend/build/ /app/site-frontend

COPY .docker/configs/site-frontend-nginx.conf /etc/nginx/conf.d/default.conf