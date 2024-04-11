#Build container
FROM node:lts AS build
ARG BACKEND_API_URL
ENV BACKEND_API_URL=$BACKEND_API_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -g nx
COPY . .
RUN nx build web --prod

#Runtime container
FROM nginx:stable-alpine
ARG BACKEND_API_URL
ENV BACKEND_API_URL=$BACKEND_API_URL
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/apps/web ./
ENTRYPOINT ["nginx", "-g", "daemon off;"]
