docker-compose down

docker build -t backend-tasker:latest .

docker-compose up --build --force-recreate --remove-orphans
