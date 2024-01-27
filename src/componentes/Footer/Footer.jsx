import React from 'react'
import { FaGithub,FaWhatsapp,FaInstagram,FaFacebook } from "react-icons/fa";
import Clase from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Clase.contenedor}>
    <ul className={Clase.enlaces} >
        <li className={Clase.link}><FaFacebook className={Clase.icono} /></li>
        <li className={Clase.link}>< FaGithub className={Clase.icono}/></li>
        <li className={Clase.link}><FaWhatsapp className={Clase.icono}/></li>
        <li className={Clase.link}><FaInstagram className={Clase.icono}/></li>
    </ul>
    <a>terminos y condiciones</a>
    </div>
  )
}

export default Footer