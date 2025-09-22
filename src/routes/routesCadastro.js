import express from "express";
import { createCadastro, deleteCadastro, getAllCadastro, getCadastroByld, updateCadastro } from "../controllers/controllersCadastros.js"

const router = express.Router();

// Listar todos
router.get("/", getAllCadastro);

// Buscar por id
router.get("/:id", getCadastroByld);

// Criar novo
router.post("/", createCadastro);

// Atualizar
router.put("/:id", updateCadastro);

// Deletar
router.delete("/:id", deleteCadastro);

export default router;