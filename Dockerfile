FROM node:14.19 AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn run build

FROM nginx AS prod

COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /usr/src/app/build .

CMD ["nginx", "-g", "daemon off;"]
