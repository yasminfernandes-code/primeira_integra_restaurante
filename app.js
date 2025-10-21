import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './config/databas.js'; 
import Reserva from './Models/Reserva.js'; 
import FaleConosco from './Models/FaleConosco.js';
import User from './Models/User.js';
import faleConoscoRoutes from './Routes/faleConoscoRoutes.js';
import autenticarRoutes from './Routes/autenticarRoutes.js';
// Sincroniza o modelo com o banco de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso reserva!');
    await Reserva.sync({ force: false }); 
    console.log("✅ Tabela 'Reservas' sincronizada com sucesso!");
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
})();
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
    
    await Reserva.sync({ force: false }); 
    console.log("✅ Tabela 'Reservas' sincronizada com sucesso!");

    await User.sync({ force: false });
    console.log("✅ Tabela 'User' sincronizada com sucesso!");

    await FaleConosco.sync({ force: false }); // Adicione esta linha
    console.log("✅ Tabela 'FaleConosco' sincronizada com sucesso!");
    
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
})();


await User.sync({ force: false });
// Sincroniza o modelo com o banco de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
    await Reserva.sync({ force: false }); 
    console.log("✅ Tabela 'Reservas' sincronizada com sucesso!");
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
})();
//-------------------------------login-------------------------------------
import routes from './Routes/index.js';
const app = express();
app.use(session({
  secret: 'sua-chave-secreta-muito-secerta', 
  resave: false,
  saveUninitialized: false,
  // Se quiser usar o Sequelize como storage, precisa de um módulo adicional (opcional por agora)
}));
import session from 'express-session';

import reservaRoutes from './Routes/reservaRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main', 
  partialsDir: [ 
    path.join(__dirname, 'views/partials'),
  ] 
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Body parser -- AQUI!
// Ele precisa vir ANTES de qualquer rota que receba dados de formulário.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use('/fale', faleConoscoRoutes);
app.use('/reserva', reservaRoutes);
app.use('/', routes);
app.use('/login', autenticarRoutes);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});