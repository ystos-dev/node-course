FROM node:10.14.2  

WORKDIR /opt/app 
COPY . .  
RUN npm install 
RUN npm -g config set user root
RUN npm -g install nodemon
# RUN npm install nodemon -g  

EXPOSE 3001