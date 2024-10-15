FROM openjdk:17-alpine

WORKDIR /app

COPY target/carpe.jar /app/carpe.jar

# Step 4: Expose the application port (8080 in this case)
EXPOSE 8080

# Step 5: Define the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "/app/carpe.jar"]