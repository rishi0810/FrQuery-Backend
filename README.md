# FrQuery Backend - JWT Authentication API

The **FrQuery Backend** is a simple authentication system using **Node.js, Express, JWT, and MongoDB**. It provides endpoints for user authentication, including **signup, login, and logout**. Secure password hashing is implemented using **Argon2**, and database connectivity is managed with **Mongoose**.

## Features

- **JWT-Based Authentication**: Secure user login and session management.
- **MongoDB Storage**: Stores user credentials with timestamps.
- **Password Hashing**: Uses Argon2 for secure password storage.
- **REST API Routes**:
  - `POST /signup` → Register a new user.
  - `POST /login` → Authenticate a user.
  - `GET /logout` → Logout the user.
- **Environment Configurable**: Uses `.env` for secrets and database URL.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rishi0810/FrQuery-Backend.git
   cd FrQuery-Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   JWT_SECRET=your_secret_key
   PORT= random_port
   mongourl=your_mongodb_url
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### 1. User Signup
- **Endpoint**: `POST /signup`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```

### 2. User Login
- **Endpoint**: `POST /login`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "email" : "your_email",
    "createdAt" : "your_signup_date",
    "id" : "mongodb_id"
  }
  ```

### 3. User Logout
- **Endpoint**: `GET /logout`

## Folder Structure

```
FrQuery-Backend/
├── controllers/      # User controller (signup, login, logout)
├── db/              # Database connectivity with Mongoose
├── models/          # User schema (email, password, timestamps)
├── routes/          # API routes for user authentication
├── util/            # Password hashing (Argon2) & JWT handling
├── .env             # Configuration file
├── index.js         # Main entry point (CORS, JSON parsing, user routes)
├── package.json     # Dependencies and scripts
└── README.md        # Documentation
```

## Contributing

Feel free to fork the repository and submit pull requests.


