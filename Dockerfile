FROM node:16.5.0-alpine3.11

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD ["npm", "run", "start"]
