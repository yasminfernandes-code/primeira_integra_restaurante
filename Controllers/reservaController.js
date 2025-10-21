import Reserva from "../Models/Reserva.js";

// GET /reserva/new → exibe formulário
export const novaReserva = (req, res) => {
  res.render("reservaNew"); 
};

// POST /reserva/add → salva no banco
export const addReserva = async (req, res) => {
  try {
    const { nome, telefone, data, horario, pessoas } = req.body;

    await Reserva.create({ nome, telefone, data, horario, pessoas });

    res.redirect("/reserva/sucesso");
  } catch (error) {
    console.error(error);
    res.send("Erro ao realizar reserva.");
  }
};
