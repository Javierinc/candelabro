let productos = [
    {id:'1', nombre: 'Vela Blanca', precio: 4000, desc: 'Vela para uso diario' ,img: 'https://picsum.photos/200'},
    {id:'2', nombre: 'Vela Lavanda', precio: 3500, desc: 'Vela para relajarse', img: 'https://picsum.photos/200'},
    {id:'3', nombre: 'Vela de Brujeria', precio: 5600, desc: 'Vela para hacer hechizos', img: 'https://picsum.photos/200'},
    {id:'4', nombre: 'Vela de Amarre', precio: 5700, desc: 'Vela para que te amen por siempre', img: 'https://picsum.photos/200'}
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