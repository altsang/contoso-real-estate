# syntax=docker/dockerfile:1

# Build Node.js app
# ------------------------------------
FROM node:18-alpine as build
WORKDIR /app
# Copy the root package.json and package-lock.json into the Docker image
COPY ../../package*.json ./
# Copy the current directory contents into the Docker image
COPY . .
RUN npm ci --cache /tmp/empty-cache
RUN npm run build:ts

# Run Node.js app
# ------------------------------------
FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app
# Copy the root package.json and package-lock.json into the Docker image
COPY ../../package*.json ./
# Copy the built stripe package directory from the build stage
COPY --from=build /app ./packages/stripe
# Install production dependencies including concurrently globally
RUN npm ci --omit=dev --cache /tmp/empty-cache
RUN npm install -g concurrently
# Verify that concurrently is installed, if not throw an error
RUN if ! type "concurrently" > /dev/null; then echo "Error: concurrently is not installed" && exit 1; fi
# Copy the built dist directory from the build stage
COPY --from=build /app/dist ./packages/stripe/dist
EXPOSE 4242
CMD [ "npm", "start" ]
