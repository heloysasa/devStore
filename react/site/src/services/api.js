import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {

    async listar() {
        let p = await api.get('/matricula');
        return p.data;
    }


    async inserir( produto, )
}