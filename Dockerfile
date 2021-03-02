FROM node:alpine
WORKDIR '/home/rec-server'
COPY server.js .
ENTRYPOINT [ "node", "server.js" ]
