// const sandia = "🍉"

// export default sandia 

export default function (){
    console.log("🍌")
}

export const frutilla = () => {
    console.log("🍓")
}

export class Fruta{
    constructor(nombre){
        this.nombre = nombre
    }
}

// Este es el export de todos, y si se aplica se le quita el export a todas las variables y clases

//export { sandia, pintarPlatano, frutilla, Fruta}

// (function (){
//     const fruta = "🍉"
//     console.log(fruta)
// })()

// (() => {
//     const fruta = "🍌"
//     console.log(fruta)
// })()