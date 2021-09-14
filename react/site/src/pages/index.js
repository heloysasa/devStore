import Cabecalho from "../components/cabecalho/index"
import ContainerMenu from "../components/menu/index"
import { useEffect, useState, useRef } from "react";
import {Container} from "./styled"





import Api from '../services/api'
const api = new Api();


export default function Paginas(){
     return(
         <Container>
             <ContainerMenu/>
              <Cabecalho/>
              <div class="pt2">
            <div class="descricao">
                <div class="barraR"><img src="/assets/linR.svg" alt=""/></div>
                <div class="titulo">{idAlterando === 0 ? "Novo Aluno" : "Alterando aluno" + idAlterando}</div>
            </div>
            <div class="conteudo">
                <div class="lado1">
                    <div class="pri">
                        <div class="no">Nome:</div>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div class="seg">
                        <div class="c">Curso:</div>
                        <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/>
                    </div>
                </div>
                <div class="lado2">
                    <div class="ter">
                        <div class="ch">Chamada:</div>
                        <input type="text" keyboardType="numeric" value={chamada} onChange={e => setChamada(e.target.value)}/>
                    </div>
                    <div class="qua">
                        <div class="t">Turma:</div>
                        <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                    </div>
                    <div class="bota">
                        <button onClick={inserir}>{idAlterando === 0 ? "Cadastrar" : "Alterar"}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt3">
            <div class="descricao2">
                <div class="barraR2"><img src="/assets/linR.svg" alt=""/></div>
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
                  </tr>
                </thead>
                <tbody>

                    {alunos.map((item,i) =>
                <tr class= {i%2 === 0 ? "resultados" : "resultadosCinza"}>
                    <td> {item.id_produto}</td>
                    <td title={item.nm_produto}>{item.nm_produto != null && item.nm_produto.length >= 25 ? item.nm_produto.substr(0,25) + '...' : item.nm_produto}</td>
                    <td>{item.ds_categoria}</td>
                    <td>{item.vl_preco_por}</td>
                    <td>{item.qtd_estoque}</td>
                    <td class="boto">
                        <button onClick={()=> alterar(item)}>
                            <img src="/assets/alterar (2).svg" alt=""/>
                        </button>
                    </td>
                    <td class="boto">
                        <button onClick={()=>  deletar(item.id_produto)}>
                            <img src="/assets/excluir.svg" alt=""/>
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