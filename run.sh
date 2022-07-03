#!/bin/bash

echo "Running for production"
cd server
./mvnw clean install package -DskipTests
cd ..
docker-compose up --build
