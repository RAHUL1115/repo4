FROM node:18
RUN mkdir -p /home/rahul/dev/app/nodeone/node_modules
WORKDIR /home/rahul/dev/app/docker/
COPY ./. ./.
RUN npm install
RUN DEV=true node ./postinstall.js
CMD [ "node", "index.js" ]