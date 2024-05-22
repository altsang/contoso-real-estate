# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Change the working directory to the portal service directory
WORKDIR /app/packages/portal

# Copy the rest of the application source code
COPY . .

# Ensure the Angular workspace files are present
COPY ../../angular.json ../../tsconfig.json ../../tsconfig.app.json ./

# Build the Angular application for production
RUN ng build

# Install a simple HTTP server to serve the built application
RUN npm install -g http-server

# Expose the port that the application will run on
EXPOSE 8080

# Set the command to serve the application
CMD ["http-server", "dist/contoso-app"]
