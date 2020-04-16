FROM node:latest

WORKDIR /ChatApp

COPY package*.json /ChatApp/

RUN npm install
RUN npm install --save socket.io
RUN npm install --save nodemon
RUN npm install --save ejs
RUN npm install --save express

COPY . /ChatApp

EXPOSE 80

CMD ["node", "app.js"]

