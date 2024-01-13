import Clase from './Boton.module.css'
const Boton = ({greeting})=>{
    return(
   <>
    <button className={Clase.boton}>{greeting}</button>
   </>
    )
}

export default Boton;
