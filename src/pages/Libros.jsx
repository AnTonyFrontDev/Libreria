import { useEffect, useState } from 'react';
import axios from 'axios';


const TitulosList = () => {
  const [titulos, setTitulos] = useState([]);

  useEffect(() => {
    // Haciendo la llamada a la API con Axios
    axios.get('https://nodelibreria.onrender.com/libreria/libro')
      .then(response => setTitulos(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-3 ">
      {titulos.map(titulo => (
        <div key={titulo.id_titulo} className="col">
          <div className="card h-100">
            {/* Puedes reemplazar la URL de la imagen con la propiedad correcta de tu objeto */}
            <img src={`https://dical.es/modules/ph_simpleblog/covers/78.jpg`} className="card-img-top" alt={titulo.titulo} />
            <div className="card-body">
              <h5 className="card-title">{titulo.titulo}</h5>
              <p className="card-text">{titulo.tipo}</p>
              <p className="card-text">${titulo.precio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitulosList;
