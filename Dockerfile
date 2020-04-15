FROM node:latest

WORKDIR /ChatApp

COPY package*.json /ChatApp/

RUN npm install

COPY . /ChatApp

EXPOSE 80

CMD ["node", "app.js"]

