import payload from 'payload';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.DATABASE_URL,
  express: app,
  onInit: () => {
    app.listen(PORT, () => {
      console.log(`Payload Admin is now available at http://localhost:${PORT}/admin`);
    });
  },
});
