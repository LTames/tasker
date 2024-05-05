FROM node:lts-alpine as build

ARG MODE=prod
ENV MODE=${MODE}

WORKDIR /app
COPY . .
RUN npm i
RUN if [ "$MODE" = "prod" ]; then \
        npm run build; \
    elif [ "$MODE" = "dev" ]; then \
        npm run build:dev; \
    fi

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/tasker-client/browser /usr/share/nginx/html

