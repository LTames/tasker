FROM openjdk:21-bullseye
COPY . .
RUN ./gradlew clean build -x test
ENTRYPOINT ["java", "-jar", "build/libs/task-manager-api-0.0.1-SNAPSHOT.jar"]
