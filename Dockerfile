FROM node:14
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN npm install
RUN npm i -g pm2
EXPOSE 3000
RUN npm run build
CMD [ "npm", "run", "start:prod" ]