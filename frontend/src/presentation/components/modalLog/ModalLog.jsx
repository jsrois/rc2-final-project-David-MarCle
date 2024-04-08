import { useState } from 'react';
import "./ModalLog.css";

const ModalLog = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRegisterEmailChange = (e) => setRegisterEmail(e.target.value);
  const handleRegisterPasswordChange = (e) => setRegisterPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Aquí puedes implementar la lógica para el registro
    } else {
      // Aquí puedes implementar la lógica para iniciar sesión
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>X</span>
        <h2> Iniciar sesión</h2>
        <form className='Form' onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input type="email" value={email} onChange={handleEmailChange} required={!isRegistering} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} required={!isRegistering} />
          </label>

          {/* Botones de inicio de sesión y registro */}
          <div className="button-container">
            <button type="button" onClick={() => setIsRegistering(false)}>Iniciar sesión</button>
            <span>or</span>
            <button type="button" onClick={() => setIsRegistering(true)}>Registrarse</button>
          </div>

          {/* Inputs adicionales para el registro */}
          {isRegistering && (
            <>
              <label>
                Correo electrónico (registro):
                <input type="email" value={registerEmail} onChange={handleRegisterEmailChange} required={isRegistering} />
              </label>
              <label>
                Contraseña (registro):
                <input type="password" value={registerPassword} onChange={handleRegisterPasswordChange} required={isRegistering} />
              </label>
              <button type="submit">Registrarse</button>
            </>
          )}

          
        </form>
      </div>
    </div>
  );
};

export default ModalLog;
