# Use the official Node.js 20 image as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies.
# If npm install fails, print the contents of the npm log file
RUN npm install || (echo "npm install failed, printing log" && cat /root/.npm/_logs/*-debug.log && exit 1)

# Install Azure Functions Core Tools
RUN apk add --no-cache \
    curl \
    nodejs \
    && apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/ azure-functions-core-tools

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 7071

# Run the application
CMD [ "npm", "start" ]
