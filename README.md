# Inventory App

A simple full-stack inventory and shopping cart application with a React + Vite frontend and an Express + PostgreSQL backend.

## Features

- Browse and search products in inventory
- Add, update, or remove items from the shopping cart
- View detailed product information
- Responsive React frontend with React Router
- RESTful Express backend with PostgreSQL database
- Dockerized frontend for production deployment

## Tech Stack

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Deployment:** Docker, Nginx

## Project Structure

```
client/     # React + Vite frontend
server/     # Express backend and database logic
  db/       # PostgreSQL pool and queries
```

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- PostgreSQL
- Docker (for containerized deployment)

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/TarsisViana/inventory-app.git
cd inventory-app
```

#### 2. Setup

- Configure environment variables in the `.env` files:

  ```
  HOST=localhost
  USER=your_db_user
  DATABASE=your_db_name
  USER_PASSWORD=your_db_password
  DEFAULT_PORT=5432
  PORT=3000
  ```

- Make sure your PostgreSQL database is running and matches your `.env` credentials.

- Start the server and supporting services (including database, if configured) using Docker Compose:

  ```bash
  docker compose up --build
  ```

## API Overview

- `GET /inventory` — List products
- `GET /inventory/cart` — Fetch cart items
- `POST /inventory/cart` — Add item to cart
- `PATCH /inventory/cart` — Update item quantity
- `DELETE /inventory/cart/:id` — Remove item from cart

*(See server/db/queries.js for more details.)*

## License

MIT

---

> **Note:** This project is a work in progress. Contributions and feedback are welcome!
