import React from 'react'
import Clase from './ListDetails.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ListDetails = ({nombre,imagen,precio,stock,descripcion}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
 
  const handleOnAdd = (quantity)=>{
     setQuantityAdded(quantity)
  }

  return (
    <div className={Clase.contenedor}>
        <img className={Clase.imagen} src={imagen}/>
        <div className={Clase.contenedorDescripcion}>
        <h2 className={Clase.nombre}>{nombre}</h2>
        <h4 className={Clase.precio}> {descripcion}</h4>
        <h3 className={Clase.precio}> Precio: ${precio}</h3>
        <h3 className={Clase.stock}> Stock Disponible: {stock}</h3>
        {quantityAdded === 0 ?  <ItemCount  stock={stock} inicio={1}  onAdd={handleOnAdd} /> : <Link className={Clase.btn} to={"/cart"}>Terminar Compra</Link>
        }
        </div>
    </div>
  )
}

export default ListDetails