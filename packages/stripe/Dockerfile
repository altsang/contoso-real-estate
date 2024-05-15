# syntax=docker/dockerfile:1

# Build Node.js app
# ------------------------------------
FROM node:18-alpine as build
WORKDIR /app
COPY ./package*.json ./
# Copy the current directory contents into the Docker image
COPY . .
RUN npm ci --workspace=stripe-api --cache /tmp/empty-cache
RUN npm run build:ts --workspace=stripe-api

# Run Node.js app
# ------------------------------------
FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app
COPY ./package*.json ./
# Copy the built stripe package directory from the build stage
COPY --from=build /app ./packages/stripe
# Install production dependencies including concurrently globally
RUN npm ci --omit=dev --workspace=stripe-api --cache /tmp/empty-cache
RUN npm install -g concurrently
# Verify that concurrently is installed, if not throw an error
RUN if ! type "concurrently" > /dev/null; then echo "Error: concurrently is not installed" && exit 1; fi
# Copy the built dist directory from the build stage
COPY --from=build /app/dist ./packages/stripe/dist
EXPOSE 4242
CMD [ "npm", "start", "--workspace=stripe-api" ]
