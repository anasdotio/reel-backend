import 'dotenv/config';
import app from './src/app.js';
import envConfig from './src/config/env.config.js';
const port = envConfig.port;

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
