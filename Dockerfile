# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /var/www/html

USER root

# Clear npm cache before installing dependencies
RUN npm cache clean --force

# Ensure npm registry is set to default public registry
RUN npm config set registry https://registry.npmjs.org/

# Copy the package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Expose the port Nuxt.js runs on
EXPOSE 3020

# Start the Nuxt.js app
CMD ["npm", "run", "dev"]
