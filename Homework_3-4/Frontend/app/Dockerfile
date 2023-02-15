### STAGE 1: Build ###
FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=node /app/dist/app /usr/share/nginx/html
