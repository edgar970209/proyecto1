import React from 'react'
import favorito from '../Recursos/images/agregar-a-los-favoritos.png';
import favoritoSeleccionado from '../Recursos/images/favorito (5).png';

import '../Recursos/css/BotonFavoritos.scss';

export const Boton = (props) => {
    const { action = undefined, textoBtn } = props;

    const actionDefault = () => {}

    return (
        <div className='botonFavoritos' onClick={(action === undefined) ? (()=>actionDefault()):(() => action())}>
            <label className='botonFavoritos__texto'>{textoBtn}</label>
        </div>
    )
}
