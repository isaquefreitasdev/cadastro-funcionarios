const express = require("express");
const router = express.Router();
const Employe = require("../models/employe");

router.get("/all", async function (req, res) {
  let funcio = await Employe.find();
  res.send(funcio);
});
router.get("/search/:cpf", async function (req, res) {
  const searchCpf = req.params.cpf;

  try {
    const result = await Employe.findOne({ cpf: searchCpf });

    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao buscar o usuário.");
  }
});

router.post("/add", express.json(), async function (req, res) {
  const { cpf, rg, email } = req.body;

  const existingFuncionario = await Employe.findOne({
    $or: [{ cpf: cpf }, { rg: rg }, { email: email },],
  });

  if (existingFuncionario) {
    return res
      .status(400)
      .send("Já existe um funcionário com o mesmo CPF, RG ou e-mail.");
  }

  let employe = new Employe({
    nome: req.body.nome,
    cpf: cpf,
    rg: rg,
    email: email,
    phone: req.body.phone,
    bankAccount: req.body.bankAccount,
    money: req.body.money,
  });

  try {
    let funcion = await employe.save();
    res.send("Cadastrado com sucesso");
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao cadastrar o funcionário.");
  }
});
router.put("/update", express.json(), async function (req, res) {
  const { nome, cpf, rg, email, phone, bankAccount, money } = req.body;
  const updatedUser = await Employe.findOneAndUpdate(
    {},
    { nome, cpf, rg, email, phone, bankAccount, money }
  );
  if (updatedUser) {
    res.status(200).send("Usuário Atualizado");
  } else {
    res.status(404).send("Usuário não encontrado");
  }
});

router.delete("/remove/:cpf", async function (req, res) {
  const cpf = req.params.cpf;
  try {
    const deletedUsers = await Employe.deleteMany({ cpf: cpf });
    if (deletedUsers.deletedCount > 0) {
      res.status(200).send("Usuário(s) deletado(s) com sucesso");
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro ao deletar o(s) usuário(s)");
  }
});
module.exports = router