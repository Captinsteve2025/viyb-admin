import payload from 'payload';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  const config = (await import('./src/payload.config.ts')).default;
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.DATABASE_URL,
    express: app,
    config,
    onInit: () => {
      app.listen(PORT, () => {
        console.log(`Payload Admin is now available at http://localhost:${PORT}/admin`);
      });
    },
  });
};

startServer();
