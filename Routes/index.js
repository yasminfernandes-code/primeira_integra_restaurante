import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.render('home', { mensagem: 'Bem-vindo ao Restaurante mefistofoles e fausto!' }); // Certifique-se de ter views/home.handlebars
});


router.get('/cardapio', (req, res) => {
  res.render('cardapio'); // views/cardapio.handlebars
});

router.get('/fale/New', (req, res) => {
  res.render('faleNew'); // views/faleconosco.handlebars
});



export default router;