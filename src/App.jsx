import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Nav from './components/Nav'
import Main from './components/Main'
import Cuerpo from './components/CuerpoPagina'
import Aside from './components/Aside'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  const menus = 
  [
    {
      nombre: "Inicio"
    },
    {
      nombre: "Diseño Web"
    },
    {
      nombre: "Nosotros"
    },
    {
      nombre: "Referencia"
    },
    {
      nombre: "Contacto"
    },
  ]
  const titulos=
  [
    {
      title: "Bienvenidos"
    },
    {
      title: "Temas Importantes"
    },
  ]

  return (
    <>
      <Header></Header>
      <Nav menu = {menus}></Nav>
      <Main titulo = {titulos} ></Main>
      <Cuerpo titulo = {"Hola"}>
        <h2>Segundo titulos</h2>
        <p>Este parrafo</p>
      </Cuerpo>
      <Aside></Aside>
      <Footer></Footer>
    </>
  )
}

export default App
