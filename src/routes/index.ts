import { Router } from 'express';

import authRoutes from '@modules/auth/auth.routes';
import usersRoutes from '@modules/users/users.routes';
import roomsRoutes from '@modules/rooms/rooms.routes';

const routes = Router();

routes.use('/authenticate', authRoutes);
routes.use('/users', usersRoutes);
routes.use('/rooms', roomsRoutes);

export default routes;
