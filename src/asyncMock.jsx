const productos = [
  {
    id: "0",
    nombre: "Iphone 13 pro",
    precio: "100000",
    categoria: "celular",
    stock: 4,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_799027-MLA47776845273_102021-F.webp",
    descripcion:
      "iPhone 13 Pro Max. El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.1",
  },
  {
    id: "1",
    nombre: "Samsung S23",
    precio: "100000",
    categoria: "celular",
    stock: 3,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_811341-MLU72749128339_112023-F.webp",
    descripcion:
      "Memoria RAM: 8 GB, Galaxy S23 con 256GB de almacenamiento interno y 8GB de RAM, Equipado con el último sistema operativo Android 13,Cuenta con una pantalla Dynamic AMOLED 2X de 6.1 pulgadas Full HD+,Triple cámara trasera de 50MP, 10MP y 12MP con funciones como autoenfoque y modo retrato.",
  },
  {
    id: "2",
    nombre: "Motorola Edge ",
    precio: "100000",
    categoria: "celular",
    stock: 9,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_731654-MLU72925329555_112023-F.webp",
    descripcion:
      "Tamaño: 158.5 x 72 x 7.5 mm, Pantalla: P-OLED touchscreen capacitivo, 1B colores ; 6.55 pulgadas, 20:9; 1080 x 2400 pixels; Gorilla Glass 5; Refresco 144 Hz HDR10+,Memoria: 12GB RAM, 256GB almacenamiento interno,Procesador: Qualcomm SM8350 Snapdragon 888+ octa-core 3GHz, Sistema Operativo: Android 12, Cámara Principal: Triple, 50 MP  Bateria : 4400 mAh",
  },
  {
    id: "3",
    nombre: "Huawei Mate 30 Pro",
    precio: "100000",
    categoria: "celular",
    stock: 9,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_763167-MLA41813090445_052020-F.webp",
    descripcion:
      "Dispositivo liberado para que elijas la compañía telefónica que prefieras,Pantalla OLED de 6.53,Tiene 4 cámaras traseras de 40Mpx/40Mpx/8Mpx/2Mpx,Cámaras delanteras de 32Mpx,Procesador HiSilicon Kirin 990 Octa-Core de 2.86GHz con 8GB de RAM,Batería de 4500mAh,Memoria interna de 256GB,Resistente al agua.",
  },
  {
    id: "4",
    nombre: "Apple iPad Pro 11",
    precio: "108900",
    categoria: "tablet",
    stock: 6,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_807417-MLU70505355390_072023-F.webp",
    descripcion:
      "Este producto combina la potencia y la capacidad de una computadora con la versatilidad y facilidad de uso que solo un iPad puede brindar. Realizar varias tareas a la vez, como editar documentos mientras buscás información en internet o sacarte una selfie, es sumamente sencillo. Como si esto fuera poco, también ofrece la posibilidad de descargar desde la App Store cientos de aplicaciones creadas para pintar, dibujar, escuchar música ",
  },
  {
    id: "5",
    nombre: "Notebook Lenovo Thinkbook",
    precio: "100000",
    categoria: "notebook",
    stock: 2,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_903166-MLA71396206475_082023-F.webp",
    descripcion:
      "Procesador Intel Core i7, Memoria RAM de 8GB ,Pantalla LED de 15.6,Resolución de 1920x1080 px.Es antirreflejo.Placa de video Gráficos Iris Xe 96EU. Conexión wifi y bluetooth. Cuenta con 3 puertos USB y puerto HDMI. Incluye lector de tarjeta de memoria. Posee pad numérico. Modo de sonido Stereo. La duración de la batería depende del uso que se le dé al producto.",
  },
  {
    id: "6",
    nombre: "Notebook Samsung Galaxy Np750 Book3 ",
    precio: "180500",
    categoria: "notebook",
    stock: 9,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_918976-MLU72748272045_112023-F.webp",
    descripcion:
      "Rendimiento de siguiente nivel con 13th Gen Intel Core  Maximiza tu día con el último procesador 13th Gen Intel Core, que ofrece un rendimiento rápido y confiable para una alta productividad y múltiples tareas.",
  },
];
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
export const getProductosById = (productoId) => {
  return new Promise((resolve) => {
    resolve(
      productos.find((product) => {
        return product.id === productoId;
      })
    );
  });
};
export const getProductosCategori = (productoCategori) => {
  return new Promise((resolve) => {
    resolve(
      productos.filter((product) => {
        return product.categoria == productoCategori;
      })
    );
  });
};
