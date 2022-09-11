import { useEffect, useState } from "react"
import styled from "styled-components"
import Titulo from "../../components/Titulo"

interface props {
    handleDados: ( dadosString: string ) => void
    dados: number[]
}

const InsercaoDadosPage = ( {dados, handleDados}: props) => {
    
    const [textInput, setTextInput] = useState('')

    useEffect( () => {
        setTextInput( dados.join(' ') )

        return ( ) => {
            console.log( 'dentro do retorno' )
        }    
    }, [])


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInput(e.target.value)
        handleDados( e.target.value )
    }
    
    return (
        <>
        <Titulo>Inserção dos dados</Titulo>
        <p>Insira os valores desejados separados por um espaço. Insira apenas valores numéricos inteiros.</p>
        <TextArea value={textInput} onChange={e => handleChange(e)}></TextArea>
        </>
    )
}

const TextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    border: 1px solid var(--primary);
    margin: 20px 0;
    padding: 10px;
    border-radius: 5px;
`

export default InsercaoDadosPage