import db from '../config/database.js';

export const gerenteRepository = {

    async buscarPorEmail(email) {
        const [resultado] = await db.query('SELECT * FROM gerentes WHERE email = ?', [email]);

        return resultado[0] || null;
    }

}