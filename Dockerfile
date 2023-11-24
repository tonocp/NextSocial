# Build Stage
FROM node:20-alpine as build-stage
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-dep --silent
COPY . .
RUN npm run build

# Production Stage
FROM httpd:alpine3.15 as production-stage
COPY --from=build-stage /app/dist /usr/local/apache2/htdocs/

# Copying .htaccess and activating mod_rewrite on Apache Server
COPY .htaccess /usr/local/apache2/htdocs/
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's#AllowOverride [Nn]one#AllowOverride All#' /usr/local/apache2/conf/httpd.conf
EXPOSE 80