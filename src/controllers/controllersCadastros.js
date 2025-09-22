import cadastro from "../models/dados.js";

//Buscar itens
const getAllCadastro = (req, res) => {
    const { id, nome, telefone, endereco, dataNascimento, categoria, ativo } = req.query;
    let resultado = cadastro;

    if(nome) {
        resultado = resultado.filter(b => b.nome.toLowerCase().includes(nome.toLowerCase()))
    }
    if(id) {
        resultado = resultado.filter(b => b.id === id)
    }

    res.status(200).json({
        total: resultado.length,
        cadastro: resultado
    });
};

const getCadastroByld = (req, res) => {
    const id = parseInt(req.params.id);
    const cadastro = cadastro.find(b => b.id === id);

    if(!cadastro) {
        return res.status(404).json({
            message: "Cadastro não encontrado"
        });
    }

    res.status(200).json(cadastro);
};

const createCadastro = (req, res) => {
    const { nome, id, email, telefone, endereco, dataNascimento, categoria, ativo } = req.body;

    if(!nome || ! email) {
        return res.status(400).json({
            success: false,
            message: "Nome, email e telefone são obrigatório"
        });
    }

    const novoCadastro = {
        id: cadastro.length + 1,
        nome: nome,
        email: email,
        telefone: telefone, 
        endereco: endereco,
        dataNascimento: dataNascimento,
        categoria: categoria,
        ativo: ativo
    
    };

    cadastro.push(novoCadastro);
    res.status(201).json({
        success: true,
        message: "Novo cliente  cadastrada com sucesso",
        cadastro: novoCadastro
    });
};

//Deletar

const deleteCadastro = (req, res) => {
    const id = parseInt(req.params.id);

    //Verificação
    if(isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O ID selecionado é invalido"
        });
    }

    //Verificar se não tem outra Cadastro com o ID
    const cadastroParaRemover = carros.find(b => b.id === id);

    if(!cadastroParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Carros com o ID ${id} não existe`
        });
    }

    //Remover Carros com o ID
    const cadastroFiltradas = carros.filter(cadastro => cadastro.id !== id);
    cadastro.slice(0, cadastro.length, ...cadastroFiltradas);

    res.status(200).json({
        success: true,
        message: `O Cadastro ${id} foi removido com sucesso`
    })
};

//Update
const updateCadastro = (req, res) => {
    //Ter logica do put update
    const id = parseInt(req.params.id);
    const { nome, email, telefone, endereco, dataNascimento, categoria, ativo } = req.body;

    //Renomear id
    if(isNaN(idParaEditar)){
        return res.status(400).json({
            sucess: false,
            message: "O id deve ser válido!"
        })
    }

    //Verificar se a Carros com Id: idParaEditar existe
    const cadastroExiste = cadastro.find(b => b.id === idParaEditar);
    if(!cadastroExiste){
        return res.status(404).json({
            sucess: false,
            message: "A Cadastro com o id " + idParaEditar + "é inexistente"
        })
    }

    //
    const cadastroAtualizadas = cadastro.map(b => b.id === idParaEditar ? {
        ...cadastro,
        ...(nome && { nome }),
        ...(email &&  { email }),
        ...(telefone &&  { telefone }),
        ...(endereco && {endereco}),
        ...(dataNascimento && {dataNascimento}),
        ...(categoria && {categoria}),
        ...(ativo && { ativo})
    }
        :carros
    )

    //Atualizar o Array
    cadastro.splice(0, cadastro.length, ...cadastroAtualizadas);
    const cadastroEditada = cadastro.find(b => b.id === idParaEditar);
    res.status(200).json({
        success: true,
        message: "Dados atualizados com sucesso da Carros",
        b: cadastroExiste
    })
}

export { getAllCadastro, getCadastroByld, createCadastro, deleteCadastro, updateCadastro };