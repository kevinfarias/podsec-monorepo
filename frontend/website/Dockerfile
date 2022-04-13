FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --force

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]