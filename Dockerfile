FROM node:latest

WORKDIR /ChatApp

COPY . /ChatApp

RUN npm install
RUN npm install --save socket.io
RUN npm install --save nodemon
RUN npm install --save ejs
RUN npm install --save express
RUN npm install --save cors

EXPOSE 80

CMD ["node", "app.js"]

