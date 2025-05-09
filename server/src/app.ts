import express, { Express } from 'express';
import cors from 'cors';
import errorHandler from './middleware/errorHandler';

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Error handling middleware
app.use(errorHandler);

export default app;