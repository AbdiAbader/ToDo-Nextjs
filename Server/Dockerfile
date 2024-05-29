FROM node:20-alpine

WORKDIR /app

COPY package.json /app

COPY . .

RUN npm install

EXPOSE 3000

ENV ALLOW_ORIGIN=http://localhost:3000
ENV ALLOW_ORIGIN=http://localhost:3009

CMD ["npm", "run", "dev"]


