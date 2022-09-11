import { useState } from 'react'
import './App.scss'
import styled from 'styled-components'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import InsercaoDadosPage from './pages/InsercaoDados/InsercaoDados'
import AnaliseDeDadosPage from './pages/AnaliseDeDados/AnaliseDeDados'
import InicialPage from './pages/Inicial/Inicial'


function App() {


  const [dados, setDados] = useState<number[]>([])
  const handleDados = (dadosString: string) => {
    setDados(dadosString.split(' ').map(i => Number(i)))
  }


  return (
    <>
      <BrowserRouter>
      <AppWrapper>
        <HeaderWrapper>
          <NavLink to='/'>Inicial</NavLink>
          <NavLink to='/insercao-dados'>Inserir dados</NavLink>
          <NavLink to='/analise-dados'>Analisar dados</NavLink>
        </HeaderWrapper>
        <MainWrapper>
          <Routes>
            <Route path='/' element={<InicialPage />}></Route>
            <Route path='/insercao-dados' element={<InsercaoDadosPage dados={dados} handleDados={handleDados} />}></Route>
            <Route path='/analise-dados' element={<AnaliseDeDadosPage dados={dados} />}></Route>
          </Routes>
        </MainWrapper>
      </AppWrapper>
        
      </BrowserRouter>

    </>
  )
}

const AppWrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

const MainWrapper = styled.main`
  width: 100%;
  background-color: #fff;
  padding: 30px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
`

const HeaderWrapper = styled.header`
  width: 100%;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);

  & a {
    text-decoration: none;
    padding: 20px;
    color: currentColor;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`

export default App
