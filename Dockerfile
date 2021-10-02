FROM node:16-alpine AS build

WORKDIR /usr/src/app
COPY . .

RUN npm install && npm run generate

FROM nginx:1.21

COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
