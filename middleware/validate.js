const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  next();
};

const validateTask = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Task title is required' });
  next();
};

module.exports = { validateRegister, validateLogin, validateTask };
