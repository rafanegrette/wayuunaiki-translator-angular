FROM node:16-alpine3.14 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install --force
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/wayuunaiki-translator-angular/ /usr/share/nginx/html
