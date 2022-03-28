FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --force

COPY . .

RUN chown node:node /usr/src/app/node_modules

RUN chown node:node /usr/src/app/node_modules/*

EXPOSE 8080

CMD ["npm", "run", "start"]