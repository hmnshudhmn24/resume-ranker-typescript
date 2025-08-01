import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import { analyzeResume } from './analyze';
import { z } from 'zod';

dotenv.config();
const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;

app.post('/analyze', upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No resume uploaded' });
  const result = await analyzeResume(req.file.path);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});