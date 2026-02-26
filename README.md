# Task Management Backend

Simple Express + MongoDB (Mongoose) backend for demo/testing purposes.

Files created:
- [app.js](app.js)
- [server.js](server.js)
- [config/db.js](config/db.js)
- [models/User.js](models/User.js)
- [models/Task.js](models/Task.js)
- [controllers/authController.js](controllers/authController.js)
- [controllers/taskController.js](controllers/taskController.js)
- [routes/authRoutes.js](routes/authRoutes.js)
- [routes/taskRoutes.js](routes/taskRoutes.js)
- [middleware/auth.js](middleware/auth.js)
- [middleware/validate.js](middleware/validate.js)

Environment:
Create a `.env` file (copy from `.env.example`):

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmang
JWT_SECRET=your_jwt_secret_here
```

Install and run:

```bash
npm install
npm run dev
```

Sample API Endpoints

- POST /api/auth/register
  - body: { "name": "Alice", "email": "a@x.com", "password": "secret" }
  - response: 201 { id, name, email, token }

- POST /api/auth/login
  - body: { "email": "a@x.com", "password": "secret" }
  - response: 200 { id, name, email, token }

- GET /api/tasks (protected)
  - header: Authorization: Bearer <token>
  - response: 200 [ { task objects } ]

- POST /api/tasks (protected)
  - header: Authorization: Bearer <token>
  - body: { "title": "My Task", "description": "Optional" }
  - response: 201 { task }

- PUT /api/tasks/:id (protected)
  - body may include: title, description, completed

- DELETE /api/tasks/:id (protected)

Example create task request/response

Request:

POST /api/tasks
Headers: { "Authorization": "Bearer <token>", "Content-Type": "application/json" }
Body:
```
{
  "title": "Buy groceries",
  "description": "Milk, eggs"
}
```

Response 201:

```
{
  "_id": "...",
  "title": "Buy groceries",
  "description": "Milk, eggs",
  "completed": false,
  "user": "...",
  "createdAt": "2026-02-26T..."
}
```

Notes
- Passwords are hashed with `bcryptjs` and JWT is used for authentication.
- This project is intentionally minimal and made for learning/demo purposes.
