# Assignment-Build-a-RESTful-API-using-Node.js-and-Express

https://github.com/SubhamSaha8688/Assignment-Build-a-RESTful-API-using-Node.js-and-Express.git
https://github.com/SubhamSaha8688/Assignment-Build-a-RESTful-API-using-Node.js-and-Express.git

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

The server will start on http://localhost:3000

## API Endpoints

### GET /users
Fetch all users

**Response**: 200 OK
```json
[
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Teaching"
  }
]
```

### GET /users/:id
Fetch a specific user by ID

**Response**: 200 OK
```json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

### POST /user
Create a new user

**Request Body**:
```json
{
  "firstName": "Subham",
  "lastName": "Saha",
  "hobby": "Reading"
}
```

**Response**: 201 Created
```json
{
  "id": "2",
  "firstName": "Subham",
  "lastName": "Saha",
  "hobby": "Reading"
}
```

### PUT /user/:id
Update an existing user

**Request Body**:
```json
{
  "firstName": "Subham",
  "lastName": "Saha",
  "hobby": "Writing"
}
```

**Response**: 200 OK
```json
{
  "id": "2",
  "firstName": "Subham",
  "lastName": "Saha",
  "hobby": "Writing"
}
```

### DELETE /user/:id
Delete a user

**Response**: 200 OK
```json
{
  "id": "2",
  "firstName": "Subham",
  "lastName": "Saha",
  "hobby": "Writing"
}
```

## Error Responses

- 400 Bad Request: Missing required fields
- 404 Not Found: User not found
- 500 Internal Server Error: Server error

## Middleware

1. Request Logging
   - Logs HTTP method, URL, status code, and request duration

2. Input Validation
   - Validates required fields (firstName, lastName, hobby)
   - Returns 400 Bad Request if validation fails