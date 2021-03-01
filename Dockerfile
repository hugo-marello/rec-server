FROM node:alpine
WORKDIR '/home/rec-server'
COPY server.js .
RUN ls
