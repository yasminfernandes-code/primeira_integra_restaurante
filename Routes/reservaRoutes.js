import { Router } from "express";
import { novaReserva, addReserva } from "../Controllers/reservaController.js";

const router = Router();

router.get("/new", novaReserva);
router.post("/add", addReserva);

router.get("/sucesso", (req, res) => {
  res.render("sucesso");
});
export default router;
