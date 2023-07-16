FROM node:16.16.0
LABEL authors="gideon"

WORKDIR /app
COPY package*.json ./

CMD npm config set cache-min 9999999 \
    && npm install \
    && npm run start:dev