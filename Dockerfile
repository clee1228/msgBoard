# base image
FROM node

# set working directory
# RUN mkdir /usr/src/app
# COPY . /usr/src/app
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.0 -g
# RUN yarn

COPY . .
EXPOSE 3000

# start app
CMD ["npm", "start"]