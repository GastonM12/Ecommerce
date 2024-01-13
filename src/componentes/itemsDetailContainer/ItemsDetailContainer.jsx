import { getProductosById } from "../../asyncMock"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ListDetails from "../ListDetails/ListDetails"

const ItemsDetailContainer = () => {
   const [detalle, setDetalle] = useState({})
    const {productId} = useParams()
  
    useEffect(() => {
        getProductosById(productId).then((res)=>{
        setDetalle(res)
        })
        
    
    }, [productId])
    

  return (
    <>
    <ListDetails imagen={detalle.imagen} precio={detalle.precio} descripcion={detalle.descripcion} nombre={detalle.nombre} stock={detalle.stock}/>
    </>
  )
}

export default ItemsDetailContainer