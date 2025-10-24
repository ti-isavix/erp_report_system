FROM node:20-alpine AS builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR package*.json ./

RUN npm install --omit=dev

COPY --from=builder /usr/src/app/dist ./dist

ENV PORT=3333

EXPOSE ${PORT}

CMD [ "node", "dist/main.js" ]
