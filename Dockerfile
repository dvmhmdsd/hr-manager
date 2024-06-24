FROM node:20 AS setup

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile && yarn install-deps && yarn build

# ============= The build stage ===============
FROM alpine:3.20

RUN apk add --update nodejs npm \
    && rm -rf /var/cache/apk/*
RUN npm i -g yarn

RUN addgroup -S node && adduser -S node -G node

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --from=setup --chown=node /app/back-end .

EXPOSE 3000

CMD [ "yarn", "start:prod" ]
