# 1. Mongoose Notes

## 1.1. What is Mongoose?
- Mongoose is a js library used to interact with MongoDB

## 1.2. Requirements
- Node.js
- MongoDB
- Mongoose
- Express

## 1.3. Installation
- Install Node.js
- Install MongoDB Compass
- Install Mongoose
```bash
npm install mongoose
```

## 1.4. Usage
- Create a new file and require mongoose
```javascript
const mongoose = require('mongoose');
```

## 1.5. Connecting to MongoDB
- Use the connect method to connect to MongoDB
```javascript
mongoose.connect('mongodb://localhost:27017/database');
```

## 1.6. Creating a Schema
- A schema is a blueprint for a model and so create a sepreate file User.js
```javascript
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

module.exports = mongoose.Model("User", userSchema);
```

## 1.7. Using the schema to add data to the collection

```javascript
const User = require('./User');

const user = new User({
    name: "John Doe",
    age: 25,
    email: "john@gmail.com"
})
user.save();
```

