FROM node:14

WORKDIR /app

COPY ./site-backend/package*.json /app/site-backend/

WORKDIR /app/site-backend

RUN npm install

WORKDIR /app

COPY ./site-backend/ /app/site-backend/
COPY .docker/entrypoints/site-backend.sh /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]