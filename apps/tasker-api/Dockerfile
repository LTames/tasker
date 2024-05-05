FROM eclipse-temurin:21-jdk-alpine
COPY . .
RUN ./gradlew clean build -x test
ENTRYPOINT ["java", "-jar", "build/libs/tasker-api-0.0.1-SNAPSHOT.jar"]
