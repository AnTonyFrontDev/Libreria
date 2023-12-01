import  { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    comentario: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://nodelibreria.onrender.com/libreria/contacto', formData);
      setModalMessage('¡Registro creado correctamente!');
      setShowModal(true);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        comentario: ''
      });
    } catch (error) {
      setModalMessage('Hubo un error al crear el registro');
      setShowModal(true);
      console.error('Error:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
        <h1>Formulario de Contacto</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="asunto">Asunto:</label>
            <input type="text" className="form-control" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="comentario">Comentario:</label>
            <textarea className="form-control" id="comentario" name="comentario" value={formData.comentario} onChange={handleChange} rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      {/* Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mensaje</h5>
              <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{modalMessage}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin del Modal */}
    </div>
  );
};

export default ContactForm;
