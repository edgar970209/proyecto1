import React, { createContext, useEffect, useState } from 'react';
import { obtenerDatosStarWars } from '../Servicios/ApiStarWars';
export const DataContext = createContext();


export const DataProvider = (props) => {

    const [data, setData] = useState();
    const [dataFavorit, setDataFavorit] = useState([]);

    useEffect(() => {
        const obtenerDatosApi = async () => {
          const respuesta = await obtenerDatosStarWars();
          setData(respuesta.data.results);
        };
  
        obtenerDatosApi();
      }, []);

    const agregarFavoritos = (idFavoritos) =>{
      data.map((values, key) => {
        if (idFavoritos === key) {
          
          setDataFavorit(
            preventeDato => [...preventeDato, values]
          );
          
        }
      });
      
    }


    const eliminarFavoritos = (llaveFavoritos) => {
      const updatefavoritos = dataFavorit.filter((item , index) => index !== llaveFavoritos);
      setDataFavorit(updatefavoritos);
    }

    const dataEnviar = {
      data,
      dataFavorit,
      agregarFavoritos,
      eliminarFavoritos
    }
    return (
        <DataContext.Provider value={{ dataEnviar}} >
            { props.children }
        </DataContext.Provider>
    )
}


