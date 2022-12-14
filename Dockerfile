FROM node:18
ARG BUILD_ARG=prod
WORKDIR /home/app/repo4
ENV BUILD=$BUILD_ARG
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "index.js" ]