# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY src ./src

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
