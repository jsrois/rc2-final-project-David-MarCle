import React, { useState } from 'react';
import './ModalUser.css'; 

const ModalUser = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('Datos Personales');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  if (!isOpen) return null;

  return (
    <div className="modalUser">
      <div className="modalUser__content">
       
        <div className="card">
        
            <div className="card__interior">
          <div className="top-nav">
            <div
              className={`nav-item ${activeSection === 'Datos Personales' ? 'active' : ''}`}
              onClick={() => handleNavClick('Datos Personales')}
            >
              Datos Personales
            </div>
            <div
              className={`nav-item ${activeSection === 'Estudios' ? 'active' : ''}`}
              onClick={() => handleNavClick('Estudios')}
            >
              Estudios
            </div>
            <div
              className={`nav-item ${activeSection === 'Cortometrajes' ? 'active' : ''}`}
              onClick={() => handleNavClick('Cortometrajes')}
            >
              Cortometrajes
            </div>
            <div
              className={`nav-item ${activeSection === 'Redes Sociales' ? 'active' : ''}`}
              onClick={() => handleNavClick('Redes Sociales')}
            >
              Redes Sociales
            </div>
            <span className="modalUser__close" onClick={onClose}>×</span>
          </div>
          <div className="content">
            <div className={`section ${activeSection === 'Datos Personales' ? 'active' : ''}`}>
              <h2>name</h2>
            </div>
            <div className={`section ${activeSection === 'Estudios' ? 'active' : ''}`}>
              <h2>formacion</h2>
            </div>
            <div className={`section ${activeSection === 'Cortometrajes' ? 'active' : ''}`}>
              <h2>cortos</h2>
            </div>
            <div className={`section ${activeSection === 'Redes Sociales' ? 'active' : ''}`}>
              <h2>rrss</h2>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
