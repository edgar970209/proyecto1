import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Favoritos } from '../Favoritos/Favoritos';
import { Home } from '../Home/Home';
import { Rutas } from '../Rutas/Rutas';
import { PATH_PRINCIPAL, PATH_HOME, PATH_FAVORITOS } from '../../Recursos/variablesGoblales/variblesGobles';

const Contenedor = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={PATH_PRINCIPAL} element={ <Rutas /> } />
          <Route exact path={PATH_HOME} element={ <Home /> } />

          <Route exact path={PATH_FAVORITOS} element={ <Favoritos />} />

        </Routes>
      </Router>
    </div>
  )
};

export default Contenedor;

