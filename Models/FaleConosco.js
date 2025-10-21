import { DataTypes } from 'sequelize';
import db from '../config/databas.js'; // Ajuste o caminho se necessário

const FaleConosco = db.define('FaleConosco', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default FaleConosco;