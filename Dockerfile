# Stage 1 - Build Angular application
FROM node:14-alpine AS build

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Angular source code
COPY . .

# Build Angular application
RUN npm run build -- --prod


# Stage 2 - Serve Angular application using Nginx
FROM nginx:alpine

# Copy Angular build output to Nginx
COPY --from=build /app/dist/bmi-calculator /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]