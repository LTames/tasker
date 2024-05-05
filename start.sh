cd apps/tasker-api

if ! [ -f private.pem ] && ! [ -f public.pem ]; then
  echo "Halo"

  openssl genrsa -out keypair.pem 2048
  openssl rsa -in keypair.pem -pubout -out public.pem
  openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out private.pem

  rm keypair.pem
fi

docker-compose down
docker-compose up --build --force-recreate --remove-orphans
