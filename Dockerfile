FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /server
COPY package.json .

# copy all file into docker server path
RUN npm init -y
RUN npm i express
RUN npm install cors --save

COPY . .

EXPOSE 3000
 
CMD ["npm", "start"]