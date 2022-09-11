import styled from 'styled-components'
import Titulo from '../../components/Titulo'
import { media, moda, maior, menor, mediana, intervalo } from '../../scripts/OperadoresEstatisticos'

interface props {
    dados: number[]
}

const AnaliseDeDadosPage = ({ dados }: props) => {

    const tratarModa = (resultado: number[]) => {
        if (resultado.length === 0) {
            return 'A amostra é amodal.'
        }
        if (resultado.length === 1) {
            return `A moda é ${resultado[0]}.`
        }
        return `A amostra é plurimodal, com as modas ${resultado.join(', ').
            replace(/(.*), (.*)/, '$1 e $2')}.`
    }

    const tratarFloat = (n: number) => {
        return (n !== Math.floor(n)) ? n.toFixed(2).replace('.', ',') : n
    }

    return (
        <>
            <Titulo>Análise dos dados</Titulo>
            <ValoresWrapper>
                {dados.map((valor, index) => {
                    return (
                        <div key={index}>
                            {valor}
                        </div>
                    )
                })}
            </ValoresWrapper>
            { dados.length > 0 ? (
                <>
                    
                    <p>A amostra tem o tamanho de {dados.length}.</p>
                    <p>A media dos valores é de {tratarFloat(media(dados))}.</p>
                    <p>{tratarModa(moda(dados))}</p>
                    <p>A mediana da amostra é {tratarFloat(mediana(dados))}.</p>
                    <p>O maior valor da amostra é {maior(dados)},
                        já o menor valor é {menor(dados)}, portanto,
                        o intervalo de valores da amostra é de {intervalo(dados)}</p>
                </>
            ) : <p>Sem dados para analisar...</p>}
        </>
    )
}

const ValoresWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    gap: 10px;
    padding: 20px;
    border: 1px solid var(--primary-light);
    margin-bottom: 20px;

    & div {
        display: block;
        border: 1px solid var(--primary-light);
        padding: 10px;
        border-radius: 5px;
    }
`

export default AnaliseDeDadosPage