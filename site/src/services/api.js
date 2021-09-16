import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {

    
    async listar() {
        let p = await api.get('/produto');
        return p.data;
    }


    async inserir( nome, cat, preD,  preP, ava, est, lin, des ) {
        let o = await api.post('/produto', {nome, cat, precoD:preD, precoP:preP,ava, des, est, img:lin});
    return o.data;
    }


    async alterar(id,nome, cat, preD,  preP, ava, est, lin, des) {
        let d = await api.put('/produto/' + id, { nome, cat, precoD:preD, precoP:preP,ava, des, est, img:lin});
        return d.data;
    }


    async deletar(id) {
        let u = await api.delete('/produto/' + id);
        return u.data;
    }

}