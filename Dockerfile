FROM node
WORKDIR /mostly
RUN npm -g config set user root
RUN npm -g install jquery
RUN npm -g install ramda
