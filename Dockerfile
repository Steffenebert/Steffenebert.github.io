FROM httpd:2.4
RUN rm -r /usr/local/apache2/htdocs/*
COPY ./ /usr/local/apache2/htdocs/

# docker build -t steffenebert-website-apache2 . // Imagename
# docker run -dit --name steffenebert-website -p 8080:80 steffenebert-website-apache2
# docker exec -it steffenebert-website /bin/bash  // Connect into container


# docker-compose up -d --> Läuft im hintergrund
