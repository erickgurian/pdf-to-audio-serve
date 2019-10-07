FROM node:10

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm
RUN npm install -g supervisor
RUN npm install -g jshint
RUN npm install -g jest
RUN npm install -g sequelize-cli

RUN npm install
