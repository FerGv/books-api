# syntax=docker/dockerfile:1

FROM node:18-alpine

ENV FORCE_COLOR=1

RUN apk update && apk add git

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY ./ ./

CMD ["npm", "run", "dev"]
