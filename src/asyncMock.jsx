const productos = [
  {
    id: 1,
    nombre: "Iphone 13",
    precio: 100000,
    categoria: "Celular",
    stock: 9,
    imagen: "",
  },
  {
    id: 1,
    nombre: "Samsung S23",
    precio: 100000,
    categoria: "Celular",
    stock: 9,
    imagen: "",
  },
  {
    id: 1,
    nombre: "Motorola Edge ",
    precio: 100000,
    categoria: "Celular",
    stock: 9,
    imagen: "",
  },
  {
    id: 1,
    nombre: "",
    precio: 100000,
    categoria: "Celular",
    stock: 9,
    imagen: "",
  },
];
const getProductos =()=>{
  return(
    new Promise((resolve) => {
      setTimeout(() => {
        
        resolve(productos)
      }, 500);
    })
  )
}
export default getProductos