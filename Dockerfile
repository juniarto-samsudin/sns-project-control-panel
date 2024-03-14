# Start with the official Node.js Docker image
FROM node:20.11-alpine

# Install bash
RUN apk add --no-cache bash

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json files to the Docker container
COPY package*.json ./

# Install the dependencies in the Docker container
RUN npm install

# Copy the rest of the application to the Docker container
COPY . .

# Build the Next.js application in the Docker container
#RUN npm run build

# Expose port 3000, which is the port that the Next.js application will run on
EXPOSE 3001

# Start the Next.js application
#CMD [ "npm", "start" ]
CMD ["npm", "run", "dev"]