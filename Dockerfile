FROM node:16-alpine

WORKDIR /usr/src/app
COPY . .

RUN npm install && npm run generate

EXPOSE 3000

CMD [ "npm", "run", "start" ]
