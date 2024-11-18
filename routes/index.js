const express = require('express');
const router = express.Router();
const path = require('path');

const db = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tabela_exemplo');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }
});

module.exports = router;
