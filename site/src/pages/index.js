import Cabecalho from "../components/cabecalho/index"
import ContainerMenu from "../components/menu/index"
import { useEffect, useState, useRef } from "react";
import {Container} from "./styled"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';





import Api from '../services/api'
const api = new Api();


export default function Paginas(){


    const loading = useRef(null);
    
    const [prod, setProd] = useState([]);
    const [nome, setNome] = useState('');
    const [preD, setPreD] = useState('');
    const [cat, setCat] = useState('');
    const [preP, setPreP] = useState('');
    const [ava, setAva] = useState('');
    const [est, setEst] = useState('');
    const [lin, setLin] = useState('');
    const [des, setDes] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

  




     async function listar() {
         let r = await api.listar();
         setProd(r);
     }


     async function inserir() {
        loading.current.continuousStart();


        if(idAlterando === 0) {


         let r = await api.inserir(nome, cat, preD,  preP, ava, est, lin, des);
         if(r.erro) {
             toast.error(`${r.erro}`); 
             loading.current.complete();
         }
         else{
            toast.success('Produto inserido!');
            loading.current.complete();
         }
         } else {
         let r = await api.alterar(idAlterando, nome,cat, preD, preP, ava, est, lin, des);
         if(r.erro) {
             toast.error(`${r.erro}`); 
             loading.current.complete();
         }
           else {
             toast.success('O produto foi alterado!');
             loading.current.complete();
           }
     }






     limparCampos();
     listar();
    }

     function limparCampos() {
        setNome('');
        setPreD('');
        setCat('');
        setPreP('');
        setAva('');
        setEst('');
        setLin('');
        setDes('');
        setIdAlterando(0);
     }


      function deletar(id){
         confirmAlert({
             title: "Remover produto",
             message: `Tem certeza que deseja remover o produto ${id} ?`,
             buttons:[
                 {
                     label: 'sim',
                     onClick: async () => {
                         let r = await api.deletar(id);
                         if (r.erro)
                           toast.error(`${r.erro}`);
                        else {
                            toast.dark('O produto foi removido!');
                            listar();
                        }
                     }
                 },
                 {
                     label:'Não'
                 }
             ]
         });
     }

     async function alterar(item) {
         setNome(item.nm_produto);
         setPreD(item.vl_preco_de);
         setCat(item.ds_categoria);
         setPreP(item.vl_preco_por);
         setAva(item.vl_avaliacao);
         setEst(item.qtd_estoque);
         setLin(item.img_produto);
         setDes(item.ds_produto);
         setIdAlterando(item.id_produto);
     }


     useEffect(() => {  
        listar();
     }, [])



     return(
         <Container>
             <ToastContainer/>
            <LoadingBar color='#f11946' ref={loading} />
             <ContainerMenu/>
              <Cabecalho/>
              <div class="pt2">
            <div class="descricao">
                <div class="barraR"><img src="/assets/images/barrinha.svg" alt=""/></div>
                <div class="titulo">{idAlterando === 0 ? "Novo Produto" : "Alterando Produto" + idAlterando}</div>
            </div>
            <div class="conteudo">
                <div class="lado1">
                    <div class="pri">
                        <div class="no">Nome:</div>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div class="seg">
                        <div class="c">Preço DE:</div>
                        <input type="text" value={preD} onChange={e => setPreD(e.target.value)}/>
                    </div>
                </div>
                <div class="lado2">
                    <div class="ter">
                        <div class="ch">Categoria:</div>
                        <input type="text" value={cat} onChange={e => setCat(e.target.value)}/>
                    </div>
                    <div class="qua">
                        <div class="t">Preço POR:</div>
                        <input type="text" value={preP} onChange={e => setPreP(e.target.value)}/>
                    </div>
                </div>
                <div class="lado3">
                    <div class="pri">
                        <div class="no">Avaliação:</div>
                        <input type="text" value={ava} onChange={e => setAva(e.target.value)}/>
                    </div>
                    <div class="seg">
                        <div class="ce">Estoque:</div>
                        <input type="text" value={est} onChange={e => setEst(e.target.value)}/>
                    </div>
                </div>
                <div class="linkimagem">
                    <div class="li">Link Imagem:</div>
                    <input type="text" value={lin} onChange={e => setLin(e.target.value)}/>
                </div>
                <div class="textareaa">
                    <div class="des">Descrição:</div>
                    <textarea type="text" rows="7" cols="7" value={des} onChange={e => setDes(e.target.value)}></textarea>
                    <div class="bota">
                        <button onClick={inserir}>{idAlterando === 0 ? "Cadastrar" : "Alterar"}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt3">
            <div class="descricao2">
                <div class="barraR2"><img src="/assets/images/barrinha.svg" alt=""/></div>
                <div class="titulo2"><b>Produtos Cadastrados</b></div>
            </div>
            <table class="tabela">
                <thead>
                  <tr class="campos">
                    <th></th>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                    {prod.map((item,i) =>
                <tr class= {i%2 === 0 ? "resultados" : "resultadosCinza"}>
                    <td class="img-ta"><img src= {item.img_produto} alt=""/></td>
                    <td> {item.id_produto}</td>
                    <td title={item.nm_produto}>{item.nm_produto != null && item.nm_produto.length >= 25 ? item.nm_produto.substr(0,25) + '...' : item.nm_produto}</td>
                    <td>{item.ds_categoria}</td>
                    <td>{item.vl_preco_por}</td>
                    <td>{item.qtd_estoque}</td>
                    <td></td> 
                    <td class="boto">
                        <button onClick={()=> alterar(item)}>
                            <img src="/assets/images/alterar (2).svg" alt=""/>
                        </button>
                    </td>
                    <td class="boto">
                        <button onClick={()=>  deletar(item.id_produto)}>
                            <img src="/assets/images/excluir.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                )}
                </tbody>
                
            </table>
        </div>



         </Container>
     )






}
