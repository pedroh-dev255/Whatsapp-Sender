const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando  http://localhost:${PORT}`);
});
