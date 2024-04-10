import React, { useState } from 'react';
import "./ModalLog.css";

const ModalLogin = ({ isOpen, onClose }) => {
  const [log, setLog] = useState({
    email: '',
    password: ''
  });
  const [register, setRegister] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    phone: ''
  });

  const [isRegistering, setIsRegistering] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isRegistering) {
      setRegister({ ...register, [name]: value });
    } else {
      setLog({ ...log, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log(register);
    } else {
      /*Lógica*/ }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>X</span>
        <h2>Iniciar sesión</h2>
        <form className='Form' onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input type="email" name="email" value={log.email} onChange={handleInputChange} required />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" value={log.password} onChange={handleInputChange} required />
          </label>
          <button type="submit">Iniciar sesión</button>
          <p>¿No tienes una cuenta? <button type="button" onClick={() => setIsRegistering(true)}>Regístrate</button></p>
        </form>

        {isRegistering && (
          <div>
            <h2>Registrarse</h2>
            <form className='Form' onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input type="text" name="name" value={register.name} onChange={handleInputChange} required />
              </label>
              <label>
                Apellidos:
                <input type="text" name="lastName" value={register.lastName} onChange={handleInputChange} required />
              </label>
              <label>
                Teléfono:
                <input type="text" name="phone" value={register.phone} onChange={handleInputChange} required />
              </label>
              <label>
                Correo electrónico:
                <input type="email" name="email" value={register.email} onChange={handleInputChange} required />
              </label>
              <label>
                Contraseña:
                <input type="password" name="password" value={register.password} onChange={handleInputChange} required />
              </label>
              <button type="submit">Registrarse</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
