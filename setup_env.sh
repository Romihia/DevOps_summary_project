#!/bin/bash
set -e

# Check environment argument
if [ -z "$1" ]; then
  echo "Usage: ./setup_env.sh <environment>"
  echo "Example: ./setup_env.sh development"
  exit 1
fi

ENV=$1
COMPOSE_FILE="docker-compose.yml"
ENV_FILE=".env.${ENV}"

# Check if the .env file exists
if [ ! -f "$ENV_FILE" ]; then
  echo "Error: Environment file $ENV_FILE does not exist!"
  exit 1
fi

# Load the environment file
export $(grep -v '^#' "$ENV_FILE" | xargs)

# Run Docker Compose with the specified environment
docker compose --env-file "$ENV_FILE" --profile "$ENV" up --build
