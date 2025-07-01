import { Router } from 'express';
import userRouter from './user.route';

const router = Router();

router.use('/users', userRouter);
router.get('/', (_req, res) => {
  res.send('API funcionando 🎉');
});

export default router;
