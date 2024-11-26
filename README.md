# DevOps_summary_project


Here is a structured guide in English for how to set up and run the application for different environments using Docker Compose. You can include this in your `README.md` file for easy copy-paste execution:

---

## Running the Application for Different Environments

You can use Docker Compose to run the application in different environments: **development**, **staging**, or **production**.

### Prerequisites
Make sure you have the following files:

- `docker-compose.yml` — defines the services (database, backend, frontend).
- `.env.development` — environment variables for the development environment.
- `.env.staging` — environment variables for the staging environment.
- `.env.production` — environment variables for the production environment.

Each environment file should contain the necessary configuration, such as database credentials and ports. Here's an example of what the `.env.development` file might look like:

```env
POSTGRES_DB=flight_booking
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
PORT=3000
REACT_APP_BASE_URL=http://localhost:3000/api
```

### Running the Application

#### 1. **Development Environment**
To run the application in the **development** environment, use the following command:

```bash
docker compose --env-file .env.development --profile dev up --build
```

This command will:

- Load environment variables from `.env.development`.
- Start the services defined under the `dev` profile (`db`, `backend`, and `frontend`).

#### 2. **Staging Environment**
To run the application in the **staging** environment, use the following command:

```bash
docker compose --env-file .env.staging --profile staging up --build
```

This command will:

- Load environment variables from `.env.staging`.
- Start the services defined under the `staging` profile.

#### 3. **Production Environment**
To run the application in the **production** environment, use the following command:

```bash
docker compose --env-file .env.production --profile production up --build
```

This command will:

- Load environment variables from `.env.production`.
- Start the services defined under the `production` profile.

---

### Notes:
- If you don’t want to specify the environment profile, you can omit the `--profile` flag. In this case, Docker Compose will use the default profile (if any).
- Make sure the environment files (`.env.development`, `.env.staging`, `.env.production`) exist and are correctly configured with the necessary credentials and settings before running the commands.

---

This guide will allow users to easily run the application in different environments, using the appropriate environment variables for each case.