# Flight Booking Website with DevOps Integration

Welcome to the Flight Booking Website project! This is a full-stack web application that enables users to search for flights, view flight details, and make bookings. The project integrates modern web development technologies with DevOps practices like containerization, CI/CD pipelines, and multi-environment deployments.

---

## 🌐 Live Demo

Visit the live application here: [Flight Booking Website](https://devops-summary-project-8nm1.onrender.com)

---

## 🚀 Project Overview

This project demonstrates:
1. **Frontend**: A React-based interface for flight booking.
2. **Backend**: A Node.js REST API for managing flight data and bookings.
3. **Database**: A PostgreSQL database containerized with Docker.
4. **DevOps Practices**: CI/CD pipelines with GitHub Actions, Docker-based containerization, and automated environment setup.
5. **Deployment**: Seamless multi-environment deployments for development, staging, and production using Render.

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Testing**: Jest for backend and Cypress for frontend testing
- **Hosting**: Render.com

---

## 📁 Project Structure

### **Root Directory**
- `.env.development`, `.env.staging`, `.env.production`: Environment-specific configuration files.
- `.gitignore`: Specifies files and directories to ignore in version control.
- `docker-compose.yml`: Docker Compose configuration for services.
- `.github/workflows/ci.yml`: CI/CD pipeline configuration for GitHub Actions.

---

### **Backend: `flight-booking-backend/`**
- **`.env.*`**: Backend-specific environment files.
- **`Dockerfile`**: Configuration for building the backend Docker image.
- **`package.json`**: Manages backend dependencies and scripts.
- **`server.js`**: Backend server entry point.
- **`src/`**:
  - **`app.js`**: Express application setup.
  - **`config/database.js`**: Sequelize database configuration.
  - **`controllers/`**:
    - `bookingController.js`: Manages booking-related API logic.
    - `flightController.js`: Handles flight-related API logic.
  - **`models/`**:
    - `Booking.js`, `Flight.js`: Sequelize models for database interaction.
    - `index.js`: Defines relationships between models.
  - **`routes/`**:
    - `bookingRoutes.js`: Routes for booking-related endpoints.
    - `flightRoutes.js`: Routes for flight-related endpoints.
  - **`tests/`**: Contains Jest tests for backend functionality.

---

### **Frontend: `flight-booking-frontend/`**
- **`.babelrc`**: Babel configuration for React.
- **`.env.*`**: Frontend-specific environment files.
- **`.gitignore`**: Excludes files and directories from version control.
- **`Dockerfile`**: Configuration for building the frontend Docker image.
- **`package.json`**: Manages frontend dependencies and scripts.
- **`jest.config.js`**: Configuration for Jest frontend testing.
- **`cypress/`**:
  - `cypress.config.js`: Cypress end-to-end testing configuration.
  - `e2e/`: Directory for end-to-end test cases.

## 🚀 How to Run the Project

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


## 📦 Deployment
CI/CD Workflow

The project uses GitHub Actions for automated CI/CD. It includes:

    CI: Running backend and frontend tests, building Docker images.
    CD: Deploying to Render.com.

Manual Deployment

You can manually trigger deployments via Render deploy hooks:

Deploy Backend:

    curl -X POST "https://api.render.com/deploy/srv-ct5m1ftumphs738u11h0?key=LyOqwZ7JBJk"

Deploy Frontend:

    curl -X POST "https://api.render.com/deploy/srv-ct5mg83qf0us7387s7c0?key=nZDosc1QXBo"



## 📊 Screenshots
Homepage

![image](https://github.com/user-attachments/assets/17dbfe6d-77bf-42d1-a537-dafe7a6b7c28)

Booking Page

![image](https://github.com/user-attachments/assets/aaee2ec9-50da-4c3c-b830-bc9a9a88e762)

Running Docker Containers
![image](https://github.com/user-attachments/assets/236ddf14-5eac-4194-b217-023c8d111ed4)

CI/CD Pipeline

![image](https://github.com/user-attachments/assets/1360beab-957b-4fef-a6f0-c7ff0e67ff6c)
Deployment Dashboard

![Untitled](https://github.com/user-attachments/assets/c2b9db1a-1f24-40ea-bb1f-979480c27c8e)
