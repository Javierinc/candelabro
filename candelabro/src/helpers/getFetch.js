let productos = [
    {
        id:"1", 
        nombre: "Vela Blanca", 
        precio: 4000, 
        resumen: "1 vela de 16cm de alto", 
        desc: "La vela blanca es utilizada para eliminar las malas vibras del ambiente. Mantén tu casa limpia con esta vela que tiene una altura de 16cm." ,
        img: "https://i.ibb.co/1fHC031/vela-blanca.png", 
        stock: 7,
        categoria: "velas"
    },
    {
        id:"2", 
        nombre: "Vela Lavanda", 
        precio: 4500, 
        resumen: "1 vela de 25cm de alto", 
        desc: "La lavanda es utilizada a nivel mundial para la relajación. Cuando tus niveles de estrés sean muy alto no dudes en utilizarla. Vela de 25cm de alto" ,
        img: "https://i.ibb.co/d2WYPvV/vela-lavanda.png", 
        stock: 40,
        categoria: "velas"
    },
    {
        id:"3", 
        nombre: "Vela de Atracción", 
        precio: 7000, 
        resumen: "1 vela 10cm de alto", 
        desc: "Esta vela es utilizada para atraer a la persona que quieres como pareja. Utiliza bien esta vela, que tan solo tiene 10cm de alto." ,
        img: "https://i.ibb.co/C8qmwRj/vela-atraccion.png", 
        stock: 9,
        categoria: "velas"
    },
    {
        id:"4", 
        nombre: "Vela Negra", 
        precio: 7500, 
        resumen: "1 unidad de 20cm de alto", 
        desc: "Las velas negras han sido utilizadas durante muchos años para la protección de seres queridos. La vela es de 20cm de alto" ,
        img: "https://i.ibb.co/CWRdsSc/vela-negra.png", 
        stock: 37,
        categoria: "velas"
    },
    {
        id:"5", 
        nombre: "Terrario Suculenta", 
        precio: 9800, 
        resumen: "1 terrario con una suculenta", 
        desc: "Este terrario mide 10cm altura y contiene en su interior una suculenta del desierto de Atacama." ,
        img: "https://i.ibb.co/0Gdz41g/terrario-suculenta.png", 
        stock: 21,
        categoria: "decoracion"
    },
    {
        id:"6", 
        nombre: "Buda", 
        precio: 44000, 
        resumen: "1 Buda hecho a mano de 15 cm de alto", 
        desc: "Esta figura de Buda esta hecha por artesanos de doñigüe, confeccionado con técnicas milenarias tien un peso de 300 gramos y 15cm de alto." ,
        img: "https://i.ibb.co/nCKcTQG/buddha.png", 
        stock: 27,
        categoria: "decoracion"
    },
    {
        id:"7", 
        nombre: "Mandala en Lino", 
        precio: 17000, 
        resumen: "1 paño de 30 x 30cm", 
        desc: "Mandala hecho a mano por artesanos de la india. Hecho con telas finas 100% natural y tintas naturales. Tamaño 30 x 30cm." ,
        img: "https://i.ibb.co/Jp3QSvh/mandala.png", 
        stock: 28,
        categoria: "decoracion"
    },
    {
        id:"8", 
        nombre: "Atrapa Sueños", 
        precio: 9000, 
        resumen: "1 tamaño 30 x 30 cm", 
        desc: "Atrapa sueños tejido por señoras artesanas de Valparaíso. Esta hecho de lana de alpaca." ,
        img: "https://i.ibb.co/NLK879z/atrapa-sue-os.png", 
        stock: 28,
        categoria: "decoracion"
    },
    {
        id:"9", 
        nombre: "Incienso de Rosas", 
        precio: 8900, 
        resumen: "Pack 10 varitas. Incienso 100% Natural", 
        desc: "Aroma delicado a rosas naturales. El pack contiene 15 varitas. Incienso 100% Natural. Hecho a mano en Nepal." ,
        img: "https://i.ibb.co/jvb7hJH/incienso-rosas.png", 
        stock: 20,
        categoria: "inciensos"
    },
    {
        id:"10", 
        nombre: "Incienso de resina de Nogal", 
        precio: 11000, 
        resumen: "Pack 10 varitas. Incienso 100% Natural", 
        desc: "Incienso hecho de resina de Nogal francés. Utilizado ampliamente para la meditación." ,
        img: "https://i.ibb.co/x1P80cF/incienso-nogal.png", 
        stock: 11,
        categoria: "inciensos"
    },
    {
        id:"11", 
        nombre: "Pack Mix de Inciensos", 
        precio: 21000, 
        resumen: "Pack 30 varitas de diferentes inciensos", 
        desc: "Nogal, Rosas, Chocolate y Naranja son los aromas que están presente en este fantástico mix." ,
        img: "https://i.ibb.co/ZKBPmBg/pack-inciensos.png", 
        stock: 30,
        categoria: "inciensos"
    },
    
    {
        id:"12", 
        nombre: "Porta Incienso", 
        precio: 3400, 
        resumen: "1 Porta incienso de cerámica", 
        desc: "Este fue hecho por artesanos en cerámica de la Patagonia." ,
        img: "https://i.ibb.co/NxzY66Z/porta-incienso.png", 
        stock: 30,
        categoria: "inciensos"
    },
    
]
  
export const gFetch = new Promise( (resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    } else {
        reject('Error, lo sentimos algo salió mal')
    }
} )