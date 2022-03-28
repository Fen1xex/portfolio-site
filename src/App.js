import styled from 'styled-components'
import { Navbar, Sidebar, Footer, Hero } from './components/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const Wrapper = styled.div``

export default App
