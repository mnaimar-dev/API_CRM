import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams();

    useEffect( () => {

        const obtenerClientesAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${ id }`
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setCargando(!cargando);
            }, 450);
        }

        obtenerClientesAPI();
    }, [] )

  return (
    <div>
        {
            cargando ? 
            
            <Spinner />
            
            : 
            
            Object.keys(cliente).length === 0 ? 
            
            <p className='font-black text-4xl text-blue-900'>No hay Resultados</p>

            : 
            
            (
            <>
                <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: { cliente.nombre }</h1>
                <p className='mt-3'>Información del Cliente</p>
                
                <p className='text-2xl mt-4 text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Email: </span>
                    { cliente.email }
                </p>

                <p className='text-2xl mt-4 text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Empresa: </span>
                    { cliente.empresa }
                </p>

                <p className='text-2xl mt-4 text-gray-600'>
                    <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>
                    { cliente.telefono }
                </p>

                {
                    cliente.notas ? 

                    <p className='text-2xl mt-4 text-gray-600'>
                        <span className='text-gray-800 uppercase font-bold'>Notas: </span>
                        { cliente.notas }
                    </p>

                    :

                    ''
                }
                    
            </>
            )
        }
        

    </div>
  )
}

export default VerCliente