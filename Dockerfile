FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN apk --no-cache add curl
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
