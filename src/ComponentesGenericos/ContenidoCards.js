import React from 'react'
import { Boton } from './Boton';
import favorito from '../Recursos/images/agregar-a-los-favoritos.png';
import favoritoSeleccionado from '../Recursos/images/favorito (5).png';
import eliminar from '../Recursos/images/favorito (4).png';

export const ContenidoCards = (props) => {

    const {dataCard, accionBtn, textoBtn, componente} = props;

    let html = null;

    html = dataCard.map((value, key) => {
        let imagen = null;
        if (componente === 'favoritos') {
            imagen = eliminar;
        }else{
            imagen = favorito;
        }
        

        return (<div key={key} className='row_cards' >
        <div className='row_cards__column'>
            <p className='row_cards__column__title'>Nombre</p>
            <p className='row_cards__column__info'>{value.name}</p>
        </div>
        <div className='row_cards__column'>
            <p className='row_cards__column__title'>Altura</p>
            <p className='row_cards__column__info'>{value.height}</p>
        </div>
        <div className='row_cards__column'>
            <p className='row_cards__column__title'>Peso</p>
            <p className='row_cards__column__info'>{value.mass}</p>
        </div>
        <div className='row_cards__column'>
            <p className='row_cards__column__title'>Fecha Nacimiento</p>
            <p className='row_cards__column__info'>{value.birth_year}</p>
        </div>
        <div className='row_cards__btn'>
            <img src={imagen} alt='' className='row_cards__btn__icono' />
            <Boton action={ () => accionBtn(key)} textoBtn={textoBtn} />
        </div>
        
        </div>)
    })
    return (
        html
    )
}

