import axios from 'axios';

export const obtenerDatosStarWars = async () => {

    try {
        return await axios.get('https://swapi.dev/api/people/');
    } catch (error) {
        return error.response;
    }
};
