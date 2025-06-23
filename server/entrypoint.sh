#!/bin/sh

# Wait for Postgres to be ready
echo "Waiting for Postgres..."
until nc -z "$HOST" "$DEFAULT_PORT"; do
  sleep 1
done

echo "Postgres is up - running migrations and seeding..."

# Run DB seeding script
node db/populate.js

# Start the server
node server.js
