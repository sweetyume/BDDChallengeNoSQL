import { Router } from 'express';
import ownerRouter from './ownerRouter';
import sitterRouter from './sitterRouter';

const router = Router();
router.use('/petSitting/owners', ownerRouter);
router.use('/petSitting/sitters', sitterRouter);

export default router;