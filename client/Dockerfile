FROM node:16-alpine as build
#specifying the working directory
WORKDIR /usr/app
#copy package.json to the working directory
COPY ./package.json .

RUN yarn

COPY . .

RUN yarn build

FROM  nginx:1.15

COPY --from=build  /usr/app/build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

# RUN npm run build 

# CMD [ "npm","start" ]