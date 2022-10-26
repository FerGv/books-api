// Libraries
import { Router } from 'express';

// Services
import { authService } from '@/services';

export const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const token = await authService.login(req.body);

  if (token) {
    res.json(token);
  } else {
    res.status(400).json({ error: 'User and/or password incorrect' });
  }
});

authRouter.post('/password/change', async (req, res) => {
  await authService.changePassword(req.body);
  res.sendStatus(204);
});

authRouter.post('/password/recover', async (req, res) => {
  await authService.recoverPassword(req.body);
  res.sendStatus(200);
});

authRouter.post('/password/reset', async (req, res) => {
  await authService.resetPassword(req.body);
  res.sendStatus(200);
});

authRouter.post('/register', async (req, res) => {
  const user = await authService.register(req.body);

  if (user) {
    res.status(201).json({ username: user.username });
  } else {
    res.status(400).json({ error: 'Incorrect body' });
  }
});
