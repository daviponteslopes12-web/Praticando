import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import gerenteRoutes from './routes/gerenteRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/gerente', gerenteRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})