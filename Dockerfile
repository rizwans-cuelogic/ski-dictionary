FROM  node:8.11-alpine

RUN mkdir opt/ski-dictionary

WORKDIR  opt/ski-dictionary

COPY   . /opt/ski-dictionary

RUN npm install

EXPOSE  9000

CMD ["node", "server.js"]




