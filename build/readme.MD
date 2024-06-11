
ng build --configuration production --output-path build/dist

docker build -t style-book-front build

docker run -it -v ${PWD}/build/conf/conf.d:/etc/nginx/conf.d --name style-book-front --network host style-book-front
