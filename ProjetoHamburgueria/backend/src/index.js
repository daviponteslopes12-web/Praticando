import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import gerenteRoutes from './routes/gerenteRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import comboRoutes from './routes/comboRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/produto', produtoRoutes);
app.use('/gerente', gerenteRoutes);
app.use('/combos', comboRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})