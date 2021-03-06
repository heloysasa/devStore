import {ContainerMenu } from "./styled"

export default function index() {
    return(
        <ContainerMenu>
            <div class="lado-esquerdo">
        <div class="cabecalho">
            <div class="logo"><img src="/assets/images/logo.svg" alt=""/></div>
            <div class="nome"><span>Dev</span>Store</div>
        </div>
        <div class="barra">:|</div>
        <div class="especificacoes">
            <div class="opcao">Gerenciamento</div>
            <div class="setinha"><img src="/assets/images/setinha.svg" alt=""/></div>
        </div>
        <div class="al">
            <div class="barra-azul"><img src="/assets/images/barLateral.svg" alt=""/></div>
            <div class="click">Produtos</div>
        </div>
    </div>
        </ContainerMenu>
    )
}
