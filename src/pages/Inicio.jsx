
import React, { useState } from 'react'
import { useEffect } from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {

  const [cliente, setCliente] = useState([])

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url) // no hace falta poner el method, es un GET por defecto
        const resultado = await respuesta.json();

        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerClientesAPI();
  }, [])

  const handleEliminar = async (id) => {
    const confirmar = confirm('¿Deseas confirmar?');
    
    if(confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${ id }`
        const respuesta = await fetch(url, {
          method: 'DELETE',
        })

        await respuesta.json()

        const arrayClientes = cliente.filter( clientes => clientes.id !== id  )

        setCliente(arrayClientes);
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus clientes</p>

        <table className='w-full mt-5 table-auto shadow bg-white'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Empresa</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {
              cliente.map( cliente => (
                <Cliente 
                  key={ cliente.id }
                  cliente= { cliente }
                  handleEliminar = { handleEliminar }
                />
              ) )
            }
          </tbody>
        </table>

    </>
  )
}

export default Inicio