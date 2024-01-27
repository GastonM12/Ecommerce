import React from 'react'
import Clase from './ListDetails.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UseCart } from '../../context/cartContext'

const ListDetails = ({nombre,imagen,precio,id,stock,descripcion}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const {addItems}=UseCart()

  const handleOnAdd = (quantity)=>{
    const objProduc = {
      id,
      nombre,
      quantity,
      imagen,
      precio,
    }
     setQuantityAdded(quantity)
     addItems(objProduc);
  }
  return (
    <div className={Clase.contenedor}>
        <img className={Clase.imagen} src={imagen}/>
        <div className={Clase.contenedorDescripcion}>
        <h2 className={Clase.nombre}>{nombre}</h2>
        <h5 className={Clase.precio}> {descripcion}</h5>
        <h3 className={Clase.precio}> Precio: ${precio}</h3>
        <h3 className={Clase.stock}> Stock Disponible: {stock}</h3>
      {quantityAdded === 0 ? <ItemCount  stock={stock} inicio={1}  onAdd={handleOnAdd} /> : <Link to={"/cart"} className={Clase.btn}>Finalizar Compra</Link>}
        </div>
    </div>
  )
}

export default ListDetails