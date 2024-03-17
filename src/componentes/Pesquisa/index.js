import Input from "../Input";
import styled from 'styled-components';
import { useState } from "react";
import { livros } from './dados';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 100vh;
    width: 100vw;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;
`

const Livro = styled.div`
    display: flex;
    flex-direction: column;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ? </Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                placeholder="Escreva sua proxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value 
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)

                }}
            />
               
                <Resultado>
                { livrosPesquisados.map( livro => (
                    <Livro>
                        <img src={livro.src}/>
                        <p>{livro.nome}</p>
                    </Livro>
                     ) ) }
                </Resultado>
           
        </PesquisaContainer>
    )
}

export default Pesquisa;