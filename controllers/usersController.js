const usersData = require('../users');
const bcrypt = require('bcryptjs');

// Display all users
const getAllUsers = (req, res) => {
  const hashedUsers = usersData.map(user => ({
    ...user
  }));
  res.json(hashedUsers);
};

// Display one user by ID
const getUserById = (req, res) => {

  const authID = req.query;
  const user = usersData.find(user => user.authID === authID.AuthID);
  if (user) {
    const hashedUser = { ...user};
    res.json(hashedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// NewUser
const NewUser = (req, res) => {
  const newUsers = req.body;
  newUsers.forEach(( newUser) => {
    usersData.push(newUser);
  });
  
  res.status(201).json({ message: 'NewUser(s) added successfully' });
};

module.exports = {
  getAllUsers,
  getUserById,
  NewUser
};