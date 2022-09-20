import { Router } from "express";
import PessoaController from "../controllers/PessoaController";

const router = Router();

router.get("/pessoas",PessoaController.index)
router.get("/pessoas/:id",PessoaController.findById)
router.post("/pessoas/",PessoaController.create)
router.put("/pessoas/:id",PessoaController.update)
router.delete("/pessoas/:id",PessoaController.delete)


export default router;
