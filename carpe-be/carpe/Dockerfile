FROM --platform=linux/amd64 openjdk:17-slim

WORKDIR /app

COPY carpe-be/carpe/target/carpe-0.0.1-SNAPSHOT.jar /app/carpe.jar

# Step 4: Expose the application port (8080 in this case)
EXPOSE 8080

# Step 5: Define the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "/app/carpe.jar"]