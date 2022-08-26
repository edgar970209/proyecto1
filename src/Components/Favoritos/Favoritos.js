import React, { useContext, useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { ContenidoCards } from '../../ComponentesGenericos/ContenidoCards';
import { DataContext } from '../../context/ApiContext';
import { Rutas } from '../Rutas/Rutas';

export const Favoritos = () => {
  const { dataFavorit, setDataFavorit } = useContext(DataContext);

  const eliminarFavoritos = (llaveFavoritos) => {
    const updatefavoritos = dataFavorit.filter((item , index) => index !== llaveFavoritos);
    setDataFavorit(updatefavoritos);
  }

  return (
    <div>
      <Rutas />
      <hr />
      <div className='contendor-row'>
        <ScrollContainer 
          className="container-scroll-drag" 
          style={{width: '100%', height: '422px', display: '-webkit-box', backgroundColor: '#125688'}}
        >
          <ContenidoCards 
            dataCard={dataFavorit} 
            accionBtn={eliminarFavoritos} 
            textoBtn='Eliminar de favoritos'
            componente={'favoritos'}
          />
        </ScrollContainer>
      </div>
    </div>
  )
}
