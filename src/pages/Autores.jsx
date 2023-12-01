// AutoresList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const AutoresList = () => {
const [autores, setAutores] = useState([]);

useEffect(() => {
    // Haciendo la llamada a la API para los autores con Axios
    axios.get('https://nodelibreria.onrender.com/libreria/author')
        .then(response => setAutores(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

return (
    <div>
        <h2>Lista de Autores</h2>
        <div className="row row-cols-1 row-cols-md-4 g-3">
        {autores.map(autor => (
            <div key={autor.id_autor} className="col">
                <div className="card h-100">
                {/* Puedes reemplazar la URL de la imagen con la propiedad correcta de tu objeto */}
                    <div className="card-body">
                        <h5 className="card-title">{`${autor.nombre} ${autor.apellido}`}</h5>
                        <p className="card-text">{`Ciudad: ${autor.ciudad}, País: ${autor.pais}`}</p>
                        <p className="card-text">{`Teléfono: ${autor.telefono}`}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default AutoresList;
