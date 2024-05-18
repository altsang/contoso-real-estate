FROM node:18 as build
# Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install -y build-essential gcc autoconf automake zlib1g-dev libpng-dev libvips-dev && rm -rf /var/cache/apt/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
# Use yarn to install dependencies
RUN npm install -g yarn && yarn install --production
WORKDIR /opt/app
COPY ./ .
RUN npm run build

FROM node:18
# Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install -y libvips-dev
# Install build tools for native dependencies
RUN apt-get install -y make g++ python3
RUN rm -rf /var/cache/apt/*
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/app ./
EXPOSE 1337
# Install Strapi globally to ensure the strapi command is available
RUN npm install -g @strapi/strapi@4.5.6
CMD ["npm", "run","start"]
