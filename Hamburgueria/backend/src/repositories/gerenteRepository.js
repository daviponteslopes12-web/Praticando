import db from '../config/database.js';

const gerenteRepository = {

    async buscarPorEmail(email) {
        const [resultado] = await db.query('SELECT * FROM gerentes WHERE email = ?', [email]);

        return resultado[0] || null;
    }

}

export default gerenteRepository;