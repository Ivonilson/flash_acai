import axios from 'axios';

//const BASE_URL = 'http://192.168.1.9/api.php';
const URL_DEMANDAS_DO_DIA = 'https://abgsolucoes.tec.br/api/vencendo_hoje.php';
const URL_VENCENDO_AMANHA = 'https://abgsolucoes.tec.br/api/vencendo_hoje1.php';
const URL_LISTA_MAMCK = 'https://abgsolucoes.tec.br/api/lista_mamck.php';
const URL_LISTA_HAVALIA = 'https://abgsolucoes.tec.br/api/lista_havalia.php';
const URL_MEDICOES_BRB_HAVALIA = 'https://abgsolucoes.tec.br/api/medicoes_brb_havalia.php';
const URL_MEDICOES_BRB_MAMCK = 'https://abgsolucoes.tec.br/api/medicoes_brb_mamck.php';

export const fetchDemandasDoDia = async () => {
    try {
        const response = await axios.get(URL_DEMANDAS_DO_DIA);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter os dados do Banco: ', error);
        throw error;
    }
}

export const fetchVencendoAmanha = async () => {
    try {
        const response = await axios.get(URL_VENCENDO_AMANHA);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter os dados do Banco: ', error);
        throw error;
    }
}

export const fetchListaMamck = async () => {
    try {
        const response = await axios.get(URL_LISTA_MAMCK);
        return response.data;
    } catch(error) {
        console.error ('Erro ao obter os dados do Banco: ', error);
        throw error;
    }
}

export const fetchListaHavalia = async () => {
    try {
        const response = await axios.get(URL_LISTA_HAVALIA);
        return response.data;
    } catch(error) {
        console.error ('Erro ao obter os dados do Banco: ', error);
        throw error;
    }
}

export const fetchMedicoesBrbHavalia = async () => {
    try {
        const response = await axios.get(URL_MEDICOES_BRB_HAVALIA);
        return response.data;
    } catch(error) {
        console.error ('Erro ao obter os dados do Banco: ', error);
        throw error;
    }
}

export const fetchMedicoesBrbMamck = async () => {
    try {
        const response = await axios.get(URL_MEDICOES_BRB_MAMCK);
        return response.data;
    } catch(error) {
        console.error ('Erro ao obter os dados do Banco: ', error);
        throw error;
    }
}