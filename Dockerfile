FROM node:8-alpine

COPY . /app/
RUN cd /app/ && \
    npm install --no-audit && \
    npm run build

EXPOSE 8000

CMD cd /app/ && node index.js
