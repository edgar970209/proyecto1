import React, { useContext } from 'react';
import { DataContext } from '../../context/ApiContext';
import { Rutas } from '../Rutas/Rutas';
import '../../Recursos/css/Home.scss'
import ScrollContainer from 'react-indiana-drag-scroll';
import { ContenidoCards } from '../../ComponentesGenericos/ContenidoCards';

export const Home = () => {

    const { dataEnviar } = useContext(DataContext);


    return (
      <div className='principal'>
          <Rutas/>
          <hr />
          <div className='contendor-row'>
            <ScrollContainer 
              className="container-scroll-drag" 
              style={{width: '100%', height: '422px', display: '-webkit-box', backgroundColor: '#125688'}}
            >
              <ContenidoCards 
                dataCard={dataEnviar.data} 
                accionBtn={dataEnviar.agregarFavoritos} 
                textoBtn='Agregar a favoritos'
                componente={'home'}
              />
            </ScrollContainer>
          </div>
      </div>
    )
}
