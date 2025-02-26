# Use a lightweight Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight Node.js image to serve the build
FROM node:18-alpine

# Install `serve` globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the built React files from the previous stage
COPY --from=builder /app/build .

# Expose port 3000
EXPOSE 3000

# Serve the build using `serve`
CMD ["serve", "-s", ".", "-l", "3000"]
