import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('conexao3', 'root', 'Ed153699', {//criar conexao3
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;

try {
  await sequelize.authenticate();
  console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
} catch (error) {
  console.error('❌ Não foi possível conectar ao banco de dados:', error);
}
