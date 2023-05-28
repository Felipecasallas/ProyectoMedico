// Se obtienen los campos del formulario
const formularioRegistro = document.getElementById("registro-medicos-form")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const numeroConsultorio = document.getElementById("consultorio")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")

// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const medico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: numeroConsultorio.value,
        telefono: telefono.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formularioRegistro.reset()
    alert("Medico registrado con exito")
})



/*//vamos a obtener la informacion del formulario
const medicoTabla = document.getElementById("registro-medicos-form")
// cuando el formulario se de click en enviar el va ejecutar la funcion flecha
medicoTabla.addEventListener('submit', (event) => {
    event.preventDefault(); //solo es para recoger la informacion pero no se envia con el prevent
    const datosMedico ={ //vamos a crear un objeto que va contener la informacion y lo definimos
        nombreMedico: document.getElementById("nombre").value,//primero atributo que va guardar informacion del campo .value va recoger info
        apellidoMedico: document.getElementById("apellido").value,
        cedulaMedico: document.getElementById("cedula").value,
        consultorio: document.getElementById("consultorio").value,
        telefono: document.getElementById("telefono").value,
        correoMedico: document.getElementById("correo").value,
        especialidad: document.getElementById("especialidad").value,

        //ya tenemos la informacion en el objeto o en la caja 
    };
   //creamos una cookie par almacenar la informacion 
    const medicosCookies = getCookie('medicos')? JSON.parse(getCookie('medicos')) :[];
     //¿hay algun medico con la especialidad? si si me devuleve true sino false
    const existeMedico = medicosCookies.some(medico => { medico.especialidad == datosMedico.especialidad
        if(existeMedico) {
            alert("Ya existe Medico para esta especialidad")
        } else {
            guardarCookie(datosMedico)
        }
        const confirmacion = confirm('Desea ver los datos o seguir añadiendo Medicos ?');
        if(confirmacion){
            window.location.href ='ListaMedicos.html'
        } else{
            console.log("continuando en el formulario");
            medicoTabla.reset();
        }
    });
    ////vamos a realizar una funcion para guardar la infromacion en una cookie
    function guardarCookie(medico){
        // vamos a obtener los datos de la cookie actual
        let datosMedico = getCookie('medicos');
        // Si la cookie está vacía, inicializarla como un arreglo vacío
        if (datosMedico == ""){
            datosMedico == [];
        }
        // vamos a Convertir la cookie en un arreglo de objetos
        const medicos = JSON.parse(datosMedico);//pasar la informacion a un objeto
        // Agregar la nueva medico al arreglo
        medicos.push(medico); //push a medico le voy a añadir la nueva informacion del formu
        // Convertir el arreglo de medicos de nuevo a un JSON
        const nuevoJSON = JSON.stringify(medicos);//para volver a enviar ese arreglo que hicimos 
        // Guardar el JSON en la cookie
        setCookie("medicos", nuevoJSON);
    }
    // Función para obtener los datos de la cookie
    function getCookie(nombre) {
        //separa las cookies y las guarda en un arreglo
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
            if (cookie[0] === nombre) {
                // devolver la infromacion de la cookie que se llama igual
                return decodeURIComponent(cookie[1]);
            }
        } //devolver vacio si no encuentra cookie
        return "";
}
    // Función para guardar datos en la cookie
    function setCookie(nombre, valor) {
        document.cookie = `${nombre}=${encodeURIComponent(valor)}`; //la funcion encode enviar la informacion encriptada
}


})*/
