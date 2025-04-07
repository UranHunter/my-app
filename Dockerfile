FROM node:18
WORKDIR /opt/build
COPY . .
RUN npm install
RUN npm run build
