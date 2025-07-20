# Creamos el target/*.jar
FROM maven:latest AS builder 
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests 

# Copiamos el *.jar en nuestra imagen java
FROM openjdk:26-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar ./java.jar
EXPOSE 8080
CMD ["java", "-jar", "java.jar"]