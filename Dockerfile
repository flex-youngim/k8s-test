FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN apk --no-cache add curl
RUN apk --no-cache add htop
RUN npm install

# Bundle app source
COPY . .

EXPOSE 9001

CMD [ "node", "index.js" ]
