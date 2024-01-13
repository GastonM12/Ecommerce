import React from 'react'
import Clase from './ListDetails.module.css'
import ItemCount from '../ItemCount/ItemCount'
const ListDetails = ({nombre,imagen,precio,stock}) => {


  return (
    <div className={Clase.contenedor}>
        <img className={Clase.imagen} src={imagen}/>
        <div className={Clase.contenedorDescripcion}>
        <h2 className={Clase.nombre}>{nombre}</h2>
        <h3 className={Clase.precio}> Precio: ${precio}</h3>
        <h3 className={Clase.stock}> Stock Disponible: {stock}</h3>
       <ItemCount  stock={stock} inicio={1}  onAdd={(valor)=>console.log(valor)} />
        </div>
    </div>
  )
}

export default ListDetails