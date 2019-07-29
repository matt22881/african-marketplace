const authRouter = require('../auth/auth-router.js');
const buyersRouter = require('../buyers/buyers-router.js');
const sellersRouter = require('../sellers/sellers-router.js');

module.exports = server => {
    server.use('/api/register', authRouter);
    server.use('/api/login', buyersRouter);
    server.use('/api/jokes', sellersRouter);
  };