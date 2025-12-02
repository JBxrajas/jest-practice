import express from 'express';
import { v4 } from 'uuid';
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/tasks', (req, res) => {
  res.json([]);
});

app.post('/tasks', (req, res) => {

    if (!req.body.title || !req.body.description) {
        return res.sendStatus(400);
    }   
  
    const{title, description} = req.body;
    res.json({ 
        title,
        id: v4(),
        description
    });
});

export default app;