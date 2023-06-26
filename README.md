# gateway-service

build docker
docker build . -t acrwebdev/gateway-service

docker push
docker push acrwebdev/gateway-service

docker pull acrwebdev/gateway-service:latest

run docker
docker run -p 2000:2000 --env SERVER_IP=35.234.42.100 --env SERVER_PORT=2000 --env AUTH_LOCATION=http://10.140.0.2:3000 --env USER_LOCATION=http://10.140.0.2:4000 --env HOUSE_LOCATION=http://10.140.0.2:5000 --env COLLECT_LOCATION=http://10.140.0.2:6000 --env COMPANY_LOCATION=http://10.140.0.2:7000 --env WEB_LOCATION=http://10.140.0.2:8080 --env SWAGGER_IP=35.234.42.100 --env TZ=Asia/Taipei --restart=always --name=gateway-service -d acrwebdev/gateway-service
