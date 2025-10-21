import { Router } from 'express';
import { novoFaleConosco, addFaleConosco } from '../Controllers/faleConoscoController.js';

const router = Router();

router.get('/new', novoFaleConosco); // Rota para o formulário
router.post('/add', addFaleConosco); // Rota para salvar os dados

export default router;