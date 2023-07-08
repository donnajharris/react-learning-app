# Specify the base image
# NOTE: using alpine or slim makes the image smaller
FROM node:18.16.1-alpine   

# Set the working directory
WORKDIR /usr/src/app

# Copy the package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app code
COPY . .

# Build the React app
RUN npm run build

# Copy the built app code
COPY build/ /usr/src/app/build

# Expose the container port
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]