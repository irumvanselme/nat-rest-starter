export JAVA_HOME=/home/anselme/.jdks/corretto-17.0.3/
./mvnw clean install package -DskipTests

docker-compose up --build