# Use the official Node.js 20 image as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies.
# If npm install fails, print the contents of the npm log file
RUN npm install || (echo "npm install failed, printing log" && cat /root/.npm/_logs/*-debug.log && exit 1)

# Install Azure Functions Core Tools using npm
RUN npm install -g azure-functions-core-tools@4 --unsafe-perm=true

# Ensure the global npm packages are in the PATH
ENV PATH="/usr/local/lib/node_modules/.bin:/usr/local/bin:/usr/local/lib/node_modules/azure-functions-core-tools/bin:${PATH}"

# List the contents of the Azure Functions Core Tools bin directory to verify the presence of the func command
RUN ls -la /usr/local/lib/node_modules/azure-functions-core-tools/bin

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 7071

# Run the application
CMD [ "npm", "start" ]
