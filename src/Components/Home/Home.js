import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/ApiContext';
import { Rutas } from '../Rutas/Rutas';
import '../../Recursos/css/Home.scss'
import ScrollContainer from 'react-indiana-drag-scroll';
import { ContenidoCards } from '../../ComponentesGenericos/ContenidoCards';
import favorito from '../../Recursos/images/agregar-a-los-favoritos.png';
import favoritoSeleccionado from '../../Recursos/images/favorito (5).png';

export const Home = () => {

    const { data, setDataFavorit } = useContext(DataContext);
    const [imgBtn, setImgBtn] = useState([]);

    console.log(data);

    const agregarFavoritos = (idFavoritos) =>{
      data.map((values, key) => {
        if (idFavoritos === key) {
          // console.log(values);
          setDataFavorit(
            preventeDato => [...preventeDato, values]
          );
        }
      })
    }


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
                dataCard={data} 
                accionBtn={agregarFavoritos} 
                textoBtn='Agregar a favoritos'
                componente={'home'}
              />
            </ScrollContainer>
          </div>
      </div>
    )
}
