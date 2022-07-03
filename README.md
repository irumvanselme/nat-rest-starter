# The Spring Boot, React Application

## Run for Development.

1. start database.
    - `docker-compose up datastore`
2. start backend
    - `cd server`
    - `./mvnw spring-boot:run`
3. start frontend
    - `cd client`
    - `yarn`
    - `yarn start`

## Run for Production

1. Make sure $JAVA_HOME is set
2. `./run.sh`
