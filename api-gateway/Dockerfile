# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3030

# Start the application
CMD ["npm", "start"]
