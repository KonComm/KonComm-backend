FROM node:alpine
COPY . /app
WORKDIR /app 
EXPOSE 4000
RUN npm install
RUN npx sequelize db:migrate
CMD node ./src/app.js