import express from 'express';

const app = express();
const PORT = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// In-memory users data
let users = [
  {
    id: "1",
    firstName: "Anshika",
    lastName: "Agarwal",
    hobby: "Teaching"
  }
];

// Validation middleware for POST and PUT requests
const validateUserData = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body;
  
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({ 
      error: "Missing required fields: firstName, lastName, and hobby are required" 
    });
  }
  
  next();
};

// GET /users - Fetch all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id - Fetch a specific user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  
  res.status(200).json(user);
});

// POST /user - Add a new user
app.post('/user', validateUserData, (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  
  // Generate a unique ID (in a real app, use a more robust method)
  const id = (users.length + 1).toString();
  
  const newUser = {
    id,
    firstName,
    lastName,
    hobby
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /user/:id - Update a user
app.put('/user/:id', validateUserData, (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, hobby } = req.body;
  
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  
  // Update the user
  users[userIndex] = {
    id,
    firstName,
    lastName,
    hobby
  };
  
  res.status(200).json(users[userIndex]);
});

// DELETE /user/:id - Delete a user
app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  
  // Remove the user
  const deletedUser = users[userIndex];
  users = users.filter(u => u.id !== id);
  
  res.status(200).json(deletedUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});