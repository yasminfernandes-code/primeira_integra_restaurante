import FaleConosco from '../Models/FaleConosco.js';

// GET /fale/new → exibe o formulário
export const novoFaleConosco = (req, res) => {
  res.render('faleNew'); // Renderiza a view 'faleNew.handlebars'
};

// POST /fale/add → salva no banco
export const addFaleConosco = async (req, res) => {
  try {
    const { nome, email, mensagem } = req.body;

    await FaleConosco.create({ nome, email, mensagem });

    res.render('sucesso', { mensagem: 'Sua mensagem foi enviada com sucesso ao faleconosco!' });
  } catch (error) {
    console.error(error);
    res.render('erro', { mensagem: 'Erro ao enviar a mensagem.' });
  }
};