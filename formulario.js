const formulario = document.getElementById("formulario")
const cardEstudiantes = document.getElementById("cardEstudiantes")
const cardProfesores = document.getElementById("cardProfesores")
const templateEstudiante = document.getElementById("templateEstudiante").content
const templateProfesor = document.getElementById("templateProfesor").content

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const datos = new FormData(formulario)
    const [nombre, edad, opcion] = [...datos.values()]
    console.log(nombre, edad, opcion)

})
