
import logo from "../../assets/logoFilmNecting.png";
import "./Header.css";
import ModalLogin from '../modalLog/ModalLog';

import  { useState } from 'react';
export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
   <header>
 <div className="headerContainer">
    <img className="headerContainer__logo" src={logo} alt="" />
    <nav className="headerContainer__nav">
            <a className="headerContainer__nav--link" href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-movie" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cb002b" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 4l0 16" />
                <path d="M16 4l0 16" />
                <path d="M4 8l4 0" />
                <path d="M4 16l4 0" />
                <path d="M4 12l16 0" />
                <path d="M16 8l4 0" />
                <path d="M16 16l4 0" />
              </svg>Films</a>
            <a className="headerContainer__nav--link" href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chair-director" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cb002b" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 21l12 -9" />
                <path d="M6 12l12 9" />
                <path d="M5 12h14" />
                <path d="M6 3v9" />
                <path d="M18 3v9" />
                <path d="M6 8h12" />
                <path d="M6 5h12" />
              </svg>Contact</a>
            <a className="headerContainer__nav--link" href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-speakerphone" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#cb002b" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 8a3 3 0 0 1 0 6" />
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
              </svg>News</a>
            <a href=""></a>
        </nav>
        <div className="headerContainer__user">
            
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" className=" user icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cb002b" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg></a>
              <button className="headContainer__user--button" onClick={handleOpenModal}>Sign up</button>
              {isModalOpen && <ModalLogin isOpen={isModalOpen} onClose={handleCloseModal} />}
             
  </div>
  </div>
  

   </header>
  )
}

