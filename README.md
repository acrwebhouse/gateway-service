# gateway-service

build docker
docker build . -t acrwebdev/gateway-service:0.0.1

docker push
docker push acrwebdev/gateway-service:0.0.1

docker pull acrwebdev/gateway-service:latest:0.0.1

run docker
docker run -p 2000:2000 --env SERVER_IP=34.80.78.75 --env SERVER_PORT=2000 --env AUTH_LOCATION=http://10.140.0.2:3000 --env USER_LOCATION=http://10.140.0.2:4000 --env HOUSE_LOCATION=http://10.140.0.2:5000 --env COLLECT_LOCATION=http://10.140.0.2:6000 --env COMPANY_LOCATION=http://10.140.0.2:7000 --env SYSTEM_LOCATION=http://10.140.0.2:8000 --env SWAGGER_IP=34.80.78.75 --env TZ=Asia/Taipei --restart=always --name=gateway-service -d acrwebdev/gateway-service:0.0.1
