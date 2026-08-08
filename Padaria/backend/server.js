import express from 'express';
import cors from 'cors';
import { pool } from './src/configs/db.js';
import estoqueRoutes from './src/routes/estoqueRoutes.js';
import fornadaRoutes from './src/routes/fornadaRoutes.js';
import { iniciarCronFornadas } from './src/utils/fornadaCron.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/estoque', estoqueRoutes);
app.use('/fornada', fornadaRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅Servidor rodando na porta ${PORT}`);
    iniciarCronFornadas();
});
