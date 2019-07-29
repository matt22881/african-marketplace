const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

module.exports = server => {
    server.use('/auth', authRouter);
    server.use('/api/jokes', usersRouter);
  };