import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Inicio from "./pages/Inicio"
import NuevoCliente from "./pages/NuevoCliente"
import EditarCliente from "./pages/EditarCliente"
import VerCliente from "./pages/VerCliente"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element = { <Layout /> }>
          <Route index element={ <Inicio />} />
          <Route path="nuevo" element={ <NuevoCliente />} />
          <Route path="editar/:id" element={ <EditarCliente />} />
          <Route path=":id" element={ <VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
