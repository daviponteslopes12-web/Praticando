import cron from 'node-cron';
import { fornadaRepository } from '../repositories/fornadaRepository.js';

const TEMPO_ESPERANDO = 10;
const TEMPO_PREPARANDO = 15;

export function iniciarCronFornadas() {

    cron.schedule('* * * * *', async () => {
        try {

            const esperando = await fornadaRepository.buscarParaAtualizar('esperando', TEMPO_ESPERANDO);

            for (const fornada of esperando) {
                await fornadaRepository.atualizarStatus(fornada.id, 'preparando');
                console.log(`[CRON] Fornada #${fornada.id} (${fornada.conteudo}) -> preparando`);
            }

            const preparando = await fornadaRepository.buscarParaAtualizar('preparando', TEMPO_PREPARANDO);

            for (const fornada of preparando) {
                await fornadaRepository.atualizarStatus(fornada.id, 'pronta');
                console.log(`[CRON] Fornada #${fornada.id} (${fornada.conteudo}) -> pronta`);
            }

        } catch (error) {
            console.error(`[CRON] Erro ao atualizar fornadas:`, error.message);
        }
    });

    console.log('[CRON] Monitoramento de fornadas iniciado');
} 