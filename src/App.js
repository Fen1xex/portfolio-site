import styled from 'styled-components'
import { Navbar, Footer, Hero } from './components/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

const Wrapper = styled.div``

export default App
