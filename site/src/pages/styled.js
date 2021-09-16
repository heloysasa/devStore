import styled from 'styled-components'

const Container = styled.div`
margin-left: 18em;
background-color: #f5f5f5;

body {
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }

 

button{
    cursor:pointer;
}

button:hover{
    opacity:0.5;
}



.pt2{
    background-color: white;
    margin: 8em 4em 4em 4em;
    height: 26em;
}



.descricao{
    display:flex;
    flex-direction:row;
    height:6em;
    margin-top: -4em;
    margin-left: 5em;
    padding-top: 1em;

}




.barraR{

}


.titulo{
    font: 700 1.5em Roboto;
    
    margin-left: 1em;

}





.conteudo{
    margin-bottom: 4.5em;
}




.lado1{
    display:flex;
    flex-direction:row;
    margin-left: 5.8em;
    
}




.pri{
    display:flex;
    flex-direction:row;
}


.no{
    font: 700 1em Roboto;
}



.seg{
    display:flex;
    flex-direction:row;
    margin-left: 1.3em;
}



.c{
    font: 700 1em Roboto;
    margin-left: .5em;
}

.ce{
    font: 700 1em Roboto;
    margin-left: .7em;
}



.linkimagem{
    display:flex;
    flex-direction:row;
    margin-top: 1em;
    margin-left: 2.3em;
}

.linkimagem input{
    width: 40em;
}



.lado2{
    display:flex;
    flex-direction:row;
    margin-top: 1em;
    margin-left: 4.2em;
}



.ter{
    display:flex;
    flex-direction:row;
    font: 700 1em Roboto;
}



.ch{}




.qua{
    display:flex;
    flex-direction:row;
    font: 700 1em Roboto;
    margin-left: 1em;
}



.t{}


input{
    
    width: 15em;
    height: 2em;
    border: 8px;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: .5em;
    outline-style: auto;
}


.lado3{
    display:flex;
    flex-direction:row;
    margin-top: 1em;
    margin-left: 4.2em;
}


.li{
    font: 700 1em Roboto;
    margin-left: .4em;
}

.linkimagem input{
    width: 37em;
}


textarea{
    outline-style: auto;
    width: 37.6em;
}


.textareaa{
    display:flex;
    flex-direction:row;
    font: 700 1em Roboto;
    margin-left: 4em;
    margin-top: 1em;
}

.bota{
    margin-left: 1.5em;
    margin-top: -.3em;

}



.bota button{
    background-color:#119FDC;
    color:white;
    border:black;
    font: 700 1em Roboto;
    border-radius: 3em;
    padding: .5em .7em;
    margin-top: 4.6em;
}


.pt3{
    height: auto;
    background-color: white;
    margin-left:2em;
    width: 63em;

}




 .descricao2{
    display:flex;
    flex-direction:row;
    
    font: 700 1.5em Roboto;
    height: 2em;
    margin-top: 2em;
    margin-left: 3.6em;
    margin-bottom: 1em;
    padding-top: .6em;

}


.barraR2{}




.titulo2{
    font: 700 1em Roboto;
    height: 7em;
    
    margin-left: 1em;

}


.tabela{

    font: 700 1em Roboto;
    margin-left: 2em;
    width: calc(100% - 4em);
    border-collapse: collapse;
    text-align: left;

}

th,td {
    padding: 1em;
 }



.campos{
    align-items: center;
    justify-content: space-between;
    background-color: #119FDC;
    color:white;
    height: 3em;
}




.resultados{
    justify-content: space-between;
    height: 2em;
}

.img-ta img{
    width: 3em;
    height:auto;
}


.boto button{
    background-color:#565656;
    border-radius: 50%;
    padding: .4em .4em;
    border: none;
   
}


.boto > button{
    visibility: hidden;
}





tr:hover{
    .boto > button{
        visibility: visible;
    }
}




.resultadosCinza{
    background-color: #f5f5f5;
    height: 2em;

} 
`

export{Container}



