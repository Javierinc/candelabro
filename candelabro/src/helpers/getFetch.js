let productos = [
    {
        id:"1", 
        nombre: "Vela Blanca", 
        precio: 4000, 
        shortDesc: "Vela para uso diario", 
        desc: "La vela blanca es utilizada para eliminar las malas vibras del ambiente. Te limpia mejor que el detergente más potente." ,
        img: "https://picsum.photos/200", 
        categoria: "velas"
    },
    {
        id:"2", 
        nombre: "Vela Lavanda", 
        precio: 4500, 
        shortDesc: "Vela para relajación", 
        desc: "Está comprobado científicamente que la lavanda relaja. Con esta vela te relajarás más que con cualquier medicamento" ,
        img: "https://picsum.photos/200", 
        categoria: "velas"
    },
    {
        id:"3", 
        nombre: "Vela Amarre", 
        precio: 7000, 
        shortDesc: "No dejes escapar el amor", 
        desc: "No importa si te quiere o no, con esta vela ya será tu amor por siempre." ,
        img: "https://picsum.photos/200", 
        categoria: "velas"
    },
    {
        id:"4", 
        nombre: "Vela Negra", 
        precio: 7500, 
        shortDesc: "Vela para eliminar algo", 
        desc: "Con esta velita podrás eliminar lo que sea. De verdad lo que sea" ,
        img: "https://picsum.photos/200", 
        categoria: "velas"
    },
    {
        id:"5", 
        nombre: "Terrario Suculentas", 
        precio: 9800, 
        shortDesc: "Lindo y más lindo", 
        desc: "Las suculentas son lo mejor, y este producto es aun mejor porque la suculenta es de plástico así que no se te morira." ,
        img: "https://picsum.photos/200", 
        categoria: "decoracion"
    },
    {
        id:"6", 
        nombre: "Buda", 
        precio: 1200, 
        shortDesc: "Zen y mucho más", 
        desc: "Buda para la buena suerte. Lo puedes dejar en tu escritorio y frotarle la panza para que te de plata." ,
        img: "https://picsum.photos/200", 
        categoria: "decoracion"
    },
    {
        id:"7", 
        nombre: "Mandala", 
        precio: 7000, 
        shortDesc: "Conecta con el universo", 
        desc: "No hay mucho que decir. Los mandalas son vida. Si quieres tener más vida debes comprarla." ,
        img: "https://picsum.photos/200", 
        categoria: "decoracion"
    }
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