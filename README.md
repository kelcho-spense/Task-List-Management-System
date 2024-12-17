
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Task List Management System

## Project Overview
A comprehensive task management system built with NestJS and PostgreSQL that enables users to organize tasks in multiple lists with categorization and priority management capabilities.

## Features
- 👤 User authentication and authorization (Admin/Normal roles)
- 📋 Multiple task lists per user
- 🏷️ Task categorization
- ⭐ Priority levels (Low, Medium, High)
- 📅 Due date management
- ⚡ Real-time updates
- 🔍 Advanced task filtering
- 📊 Activity tracking

## Tech Stack
- NestJS
- PostgreSQL
- Prisma ORM
- TypeScript
- JWT Authentication

## Prerequisites
- Node.js (v20 or higher)
- PostgreSQL (v16 or higher)
- npm or pnpm

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/kelcho-spense/Task-List-Management-System.git
cd Task-List-Management-System
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
# Copy example env file
cp .env.example .env

# Update .env with your database credentials
DATABASE_URL="postgresql://username:password@localhost:5432/tasklist_db"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start the Application
```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Authentication
All endpoints except registration and login require JWT authentication.
Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Available Endpoints
Detailed API documentation can be found in `app.http`

#### Users
- POST /users - Create user
- GET /users - List users
- GET /users/:id - Get user details
- PATCH /users/:id - Update user
- DELETE /users/:id - Delete user

#### Lists
- POST /lists - Create list
- GET /lists - Get all lists
- GET /lists/:id - Get list details
- PATCH /lists/:id - Update list
- DELETE /lists/:id - Delete list

#### Tasks
- POST /tasks - Create task
- GET /tasks - List tasks
- GET /tasks/:id - Get task details
- PATCH /tasks/:id - Update task
- DELETE /tasks/:id - Delete task

#### Categories
- POST /categories - Create category
- GET /categories - List categories
- GET /categories/:id - Get category details
- PATCH /categories/:id - Update category
- DELETE /categories/:id - Delete category

## Database Schema
For detailed database design documentation, see [Database Design](./prisma/Database.design.md)

## Development

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Making Schema Changes
1. Modify `schema.prisma`
2. Create migration:
```bash
npx prisma migrate dev --name describe_your_changes
```

### Code Style
- Follow NestJS best practices
- Use TypeScript strict mode
- Maintain consistent naming conventions
- Write unit tests for new features

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Support
For support, email support@tasklistms.com or create an issue in the repository.

