import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 50px;
    cursor: pointer;
`

const Livros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 200px;
    padding: 30px 30px;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">Produtos</Titulo>
                <NovosLivrosContainer>
                { livros.map( livro => (
                    <Livros>
                        <img src={livro.src}/>
                        <p>{livro.nome}</p>
                    </Livros>
                    
                ))}
                </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;