FROM swissbobo/backend-dev:v1
LABEL author 'Obafemi Lawal' email 'swissbobo@gmail.com'

WORKDIR /app/frontend

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./ ./


ENV HOST_PORT 3006
EXPOSE $HOST_PORT

CMD [ "npm", "run", "build" ]