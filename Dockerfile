FROM node:10.14.2

WORKDIR /opt/app
COPY . .

RUN npm install
RUN npm install nodemon -g

## Installing  pdftk
#RUN apt-get update && \
#    apt-get install -y pdftk && \
#    ln -s /usr/bin/pdftk /usr/local/bin/pdftk
#
## Copying project to proper folder
#COPY . .
#
## Installing additional packages
#RUN npm install node-pdftk && \
#    npm install gm && \
#    npm install pm2 -g && \
#    npm install sails-mysql && \
#    npm install sails && \
#    npm install node-pdftk && \
#    npm install
#
## Added ability to execute startup.sh file
#RUN chmod +x ./start.sh
#
## Exposing ports
#EXPOSE 3000 1337
#
## Starting application
#ENTRYPOINT [ "./start.sh" ]
