import './App.css';
import Contenedor from './Components/Contenedor/Contenedor';
import { DataProvider } from './context/ApiContext';

function App() {
  return (
    // <div className="App">
      <DataProvider>
        <Contenedor />
      </DataProvider>
      
    // </div>
  );
}

export default App;
