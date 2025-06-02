# Use lightweight NGINX image
FROM nginx:alpine

# Remove default NGINX web content
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website files into NGINX's public folder
COPY . /usr/share/nginx/html

# Expose port 80 (optional; for documentation)
EXPOSE 80

# No need to set CMD — nginx:alpine already starts Nginx by default