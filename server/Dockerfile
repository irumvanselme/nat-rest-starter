FROM amazoncorretto:17-alpine

WORKDIR /app
COPY . .

COPY target/nat2022Server.jar application.jar

ENTRYPOINT ["java", "-jar", "application.jar"]