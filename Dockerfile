FROM node:12.16.0 as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install
RUN if [ "$NODE_ENV" = "production" ] ; then npm ci; else npm install; fi

FROM node:12.16.0

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]