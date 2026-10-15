let alumnos = []

function agregarAlumno(nombreAlumno, promocionaAlumno, mediaAlumno) {
    let alumno = {nombre: nombreAlumno, promociona: promocionaAlumno, media: mediaAlumno}
    alumnos.push(alumno)
}


agregarAlumno("Juan", true, 7.3)
agregarAlumno("Tere", true, 7.6)
agregarAlumno("Luisa", false, 5.2)
agregarAlumno("Berto", false, 3.9)




let table = document.createElement("table")
let tr = document.createElement("tr")
let th = document.createElement("th")
th.appendChild(document.createTextNode("Alumno"))
tr.appendChild(th)
th = document.createElement("th")
th.appendChild(document.createTextNode("Promociona"))
tr.appendChild(th)
th = document.createElement("th")
th.appendChild(document.createTextNode("Nota media"))
tr.appendChild(th)
table.appendChild(tr)

let td = undefined
for (let i = 0; i < alumnos.length; i++) {
    tr = document.createElement("tr")
    td = document.createElement("td")
    td.appendChild(document.createTextNode(alumnos[i]['nombre']))
    tr.appendChild(td)
    td = document.createElement("td")
    td.appendChild(document.createTextNode(alumnos[i]['promociona']))
    tr.appendChild(td)
    td = document.createElement("td")
    td.appendChild(document.createTextNode(alumnos[i]['media']))
    tr.appendChild(td)
    table.appendChild(tr)
}

document.querySelector("body").appendChild(table)
