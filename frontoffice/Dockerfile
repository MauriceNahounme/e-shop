FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]