FROM node:alpine

WORKDIR /app

COPY ./package.json .

# remove proxy if there's any 
RUN npm config set proxy null
RUN npm config set https-proxy null
RUN npm config set registry http://registry.npmjs.org/

RUN npm install

COPY . . 

CMD ["npm", "start"]