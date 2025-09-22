import express from "express";
import { 
    getAllCadastro, 
    getAllCadastro, 
    createCadastro, 
    deleteCadastro, 
    updateCadastro
} from "../controllers/cadastroController.js";

const router = express.Router();

router.get("/", getAllCadastro);
router.get("/:id", getCadastroById);
router.post("/", createCadastro);
router.delete("/:id", deleteCadastro);
router.put("/:id", updateCadastro);

export default router;