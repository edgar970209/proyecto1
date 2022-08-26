import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_PRINCIPAL, PATH_HOME, PATH_FAVORITOS } from '../../Recursos/variablesGoblales/variblesGobles';

import '../../Recursos/css/Rutas.scss';

export const Rutas = () => {

    const navigate = useNavigate();

    const accionBoton = (tipo) => {
        switch (tipo) {
            case 'principal':
                navigate(PATH_PRINCIPAL);
                break;
            case 'home':
                navigate(PATH_HOME);
                break;
            case 'favoritos':
                navigate(PATH_FAVORITOS);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <NavBar  accion={accionBoton}/>
            
        </div>
    );
};


const NavBar = (props) => {
    const { accion } = props;

    return(
        <header className='navbar'>
            <div className='navbar__title navbar__item' onClick={() => accion('principal')}>Star Wars</div>
            <div className='navbar__item' onClick={() => accion('home')} >Home</div>
            <div className='navbar__item' onClick={() => accion('favoritos')} >Favoritos</div>
        </header>
    )
};
