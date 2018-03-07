FROM node:8-alpine

RUN mkdir -p /frontend
WORKDIR /frontend
COPY ./ .

RUN yarn install
RUN npm run build:prod

EXPOSE 8000