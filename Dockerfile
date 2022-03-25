FROM node:16-alpine

WORKDIR /app

COPY src .
COPY .env .

EXPOSE ${PORT}

RUN npm install && npm cache clean --force
RUN npm install -g pm2

CMD ["pm2-runtime", "start", "index.js", "-i", "max"]
