FROM node:16.15.1-alpine

LABEL version="1.0"
LABEL description="Production image for the Library MERN API"

WORKDIR /app

COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]