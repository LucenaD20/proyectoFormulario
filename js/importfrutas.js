// // juntas si son del mismo archivo
// import pintarPlatano, {frutilla as fresa , Fruta } from "./frutas.js"
// // import {pintarPlatano } from "./frutas.js"
// // import melon from "./frutas.js"

// // console.log(melon)
// const guinda = new Fruta ("🍒")
// console.log(guinda)

// pintarPlatano()
// fresa()

// localStorage.setItem("platano", "🍌")
// localStorage.setItem("sandia", "🍉")

// if(localStorage.getItem("platano")){
//     const platano = localStorage.getItem("platano")
//     console.log(platano)

// }

// const frutas = [
//     {
//         nombre: "🍌",
//         color: "amarillo",
//     },
//     {
//         nombre: "🍒",
//         color: "rojo",
//     },
//     {
//         nombre: "🍏",
//         color: "verde",
//     },

// ]

// localStorage.setItem("frutas", JSON.stringify(frutas))
if(localStorage.getItem("frutas")){
const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"))
console.log(frutasDesdeLocal)
}
// localStorage.removeItem("platano")

// localStorage.clear()