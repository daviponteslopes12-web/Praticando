import express from 'express';
import cors from 'cors'
import jwt from 'jsonwebtoken';

import pedidosRoutes from './routes/pedidosRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());



app.use(pedidosRoutes);



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`)
});