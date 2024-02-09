export const createProductsAdapter = (doc)=>{
 const fields = doc.data()
    return{
     id: doc.id,
     nombre:fields.nombre,
     descripcion:fields.descripcion,
     stock:fields.stock,
     precio:fields.precio,
     imagen: fields.imagen
 }
}