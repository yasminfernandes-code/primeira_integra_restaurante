// Routes/authRoutes.js
import { Router } from 'express';
import { novologin, addlogin, novoregister, addregister, logout } from '../Controllers/autenticarController.js';

const router = Router();

// Rotas para login
router.get('/', novologin);
router.post('/add', addlogin);

// Rotas para registro
router.get('/registerform', novoregister);
router.post('/addregister', addregister);

// Rota de Logout
router.post('/logout', logout);

export default router;