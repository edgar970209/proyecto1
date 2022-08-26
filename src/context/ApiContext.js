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

    return (
        <DataContext.Provider value={{ data, setData, dataFavorit, setDataFavorit }} >
            { props.children }
        </DataContext.Provider>
    )
}


