FROM nginx

RUN rm /etc/nginx/nginx.conf
COPY ./conf/nginx.conf /etc/nginx

RUN rm -rf /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html
