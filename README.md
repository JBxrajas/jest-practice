# Jest Practice Project

A practical project for learning and practicing Jest testing with Express.js, featuring automated testing and coverage reporting deployed to GitHub Pages.

## Description

This project demonstrates best practices for testing REST APIs using Jest and Supertest. It includes a simple Express.js task management API with comprehensive test coverage and automated CI/CD deployment.

## Features

- ✅ Express.js REST API with task management endpoints
- ✅ Comprehensive Jest test suite with Supertest
- ✅ ES Modules support
- ✅ Code coverage reporting
- ✅ GitHub Actions CI/CD pipeline
- ✅ Automated deployment to GitHub Pages

## Prerequisites

- Node.js 20 or higher
- npm

## Installation

```bash
# Clone the repository
git clone https://github.com/JBxrajas/jest-practice.git
cd jest-practice

# Install dependencies
npm install
```

## Usage

### Running the Application

```bash
node src/index.js
```

The server will start on `http://localhost:3000`

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage
```

The coverage report will be generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` in your browser to view the detailed report.

## API Endpoints

### GET /ping
Returns a simple pong response to verify the server is running.

**Response:**
```
pong
```

### GET /tasks
Returns all tasks as a JSON array.

**Response:**
```json
[]
```

### POST /tasks
Creates a new task with a unique ID.

**Request Body:**
```json
{
  "title": "Task title",
  "description": "Task description"
}
```

**Response:**
```json
{
  "id": "generated-uuid",
  "title": "Task title",
  "description": "Task description"
}
```

**Validation:**
- Both `title` and `description` are required
- Returns `400 Bad Request` if either field is missing

## Test Coverage

The project maintains high test coverage including:
- Endpoint response status codes
- Response content types
- JSON response validation
- UUID generation verification
- Input validation and error handling

View the live coverage report: [https://jbxrajas.github.io/jest-practice/](https://jbxrajas.github.io/jest-practice/)

## Project Structure

```
jest-practice/
├── .github/
│   └── workflows/
│       └── test-and-deploy.yml  # GitHub Actions workflow
├── src/
│   ├── app.js                   # Express app configuration
│   └── index.js                 # Server entry point
├── test/
│   └── index.spec.js            # Jest test suite
├── coverage/                     # Generated coverage reports
├── .gitignore
├── jest.config.cjs              # Jest configuration
├── package.json
└── README.md
```

## Technologies Used

- **Express.js** - Web framework
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library
- **UUID** - Unique ID generation
- **GitHub Actions** - CI/CD automation

## CI/CD Pipeline

The project uses GitHub Actions to:
1. Run tests on every push and pull request
2. Generate coverage reports
3. Deploy coverage reports to GitHub Pages (main branch only)

## Contributing

This is an educational project for practicing Jest testing. Feel free to fork and experiment!

## License

ISC

## Author

JBxrajas
