# Use Node.js as the base image for building Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install project dependencies
RUN npm install

# Copy the application files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Use Nginx to serve the compiled Angular app
FROM nginx:alpine

# Copy the compiled app from the build stage
COPY --from=build /app/dist/intern /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
