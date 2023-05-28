function mostrarMedicos() {
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    const tablaMedicos = document.getElementById("tablamedico")
    const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0]
    medicos.forEach(medico => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreMedico = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        
        

        celdaNombreMedico.textContent = medico.nombre
        celdaApellido.textContent = medico.apellido
        celdaNumeroCedula.textContent = medico.cedula
        celdaConsultorio.textContent = medico.consultorio
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
        
    });
}

mostrarMedicos()


/*//cargar los datos de la cookie
//cargar los medicos y mascotas que ya esten guardados, como estan en formato JSON se pasan a objetos para poder trabajarlos en js
const medicosCookies = JSON.parse(getCookie('medicos'));
const pacientesCookies = JSON.parse(getCookie('pacientes') || "[]");
//buscar la tabla medicos en HTML para agregar las nuevas mascotas
const tablaMedicos = document.getElementById('tablamedico');
const estructuraTabla =tablaMedicos.querySelector('tbody');

for (let i = 0; i < medicosCookies.length; i++){  //buscar la tabla mascotas en HTML para agregar las nuevas mascotas
    const medico = medicosCookies[i];
    //insertar fila para agregar Medicos
    const fila = estructuraTabla.insertRow();
    //insertar celdas para agregar cada uno de los datos del medico
    const nombreMedico = fila.insertCell();
     //agregar la informaciona cada una de las celdas de la tabla
    nombreMedico.textContent = medico.nombreMedico;
    const apellidoMedico = fila.insertCell();
    apellidoMedico.textContent= medico.apellidoMedico;
    const cedulaMedico = fila.insertCell();
    cedulaMedico.textContent = medico.cedulaMedico;
    const consultorio = fila.insertCell();
    consultorio.textContent = medico.consultorio;
    const telefono = fila.insertCell();
    telefono.textContent = medico.telefono;
    const correoMedico = fila.insertCell();
    correoMedico.textContent = medico.correoMedico;
    const especialidad = fila.insertCell();
    especialidad.textContent = medico.especialidad;
     //colocar las pacientes que atiende el medico
    //mediante filter encontramos todas los pacientes que tienen esa especialidad
    let pacienteEncontrado = medicosCookies.filter( paciente=> medico.especialidad == paciente.especialidad);
    //se creo la celda
    const medicoPaciente = fila.insertCell();
    //si hay medicos colocar el nombre del medico, de lo contrario colocar por asignar
    if (pacienteEncontrado.length > 0){
        medicoPaciente.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = medicoPaciente.querySelector("#pacientes")
        for (let j = 0; j < pacienteEncontrado.length; j ++){
            const nombresPaciente = pacienteEncontrado [j];
            pacientes.innerHTML += `<li>${nombresPaciente.nombrePaciente}</li>`;
        }

    
    } else {
        medicoPaciente.textContent = "sin pacientes";

    }
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa todas las cookies que se tengan
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        //busca la cookie que necesitemos en este caso la cookie llamada mascota
        if (cookie[0] === nombre) {
            //si encuentra la cookie devuelve la informacion desencriptada (en formato JSON)
            return decodeURIComponent(cookie[1]);
        }
    }
    //si no encuentra ninguna cookie devuelve vacio
    return "";
}*/
