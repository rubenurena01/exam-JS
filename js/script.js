function pedirNombre() {
    const nombre = prompt("Introduce tu nombre y tus apellidos")
    if(nombre){
        return nombre
    }else{
        return pedirNombre()
    }
}
alert("Bienvenido al examen de JavaScript, Recuerda que tienes que poner tu nombre y el tiempo comenzara, solo tienes 30 segundos para realizar el examen")
const nombre = pedirNombre()
document.getElementById('nombre').append(nombre)
const dia = new Date()
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const fecha = document.getElementById('fecha').append(dia.getDate()+"/"+meses[dia.getMonth()]+"/"+dia.getFullYear())
const form = document.getElementById('preguntas')
function validar(){
    var resultado = 0
    var resuFinal = document.getElementById('final')
    var cuerpo = document.getElementById('cuerpo')
    if(form.respuesta[1].checked){
        resultado+=1
    }else if(form.respuesta[0].checked){
        resultado-=0.5
    }else{
        resultado+=0
    }
    if(form.respuesta2[2].selected){
        resultado+=1
    }else if(form.respuesta2[1].selected || form.respuesta2[3].selected || form.respuesta2[4].selected){
        resultado-=0.5
    }else{
        resultado+=0
    }
    if(form.respuesta3[0].checked && form.respuesta3[2].checked){
        resultado+=1
    }else if(form.respuesta3[0].checked || form.respuesta3[2].checked){
        resultado+=0.5
    }else if(form.respuesta3[1].checked || form.respuesta3[3].checked){
        resultado-=0.5
    }else{
        resultado+=0
    }
    window.clearInterval(intervalo)
        form.Enviar.disabled=true
        form.Enviar.value=`Enviar`
    if(resultado>=1.5){
        resuFinal.append(" "+resultado)
        cuerpo.style.backgroundColor = 'green'
        document.getElementById('imagen').innerHTML="<img src='../img/aprobado.png'>"
        document.getElementById('notificacion').innerHTML="<h1 style='color:white;'>HAS APROBADO</h1>"
        return false
    }
    if(resultado<1.5){
        resuFinal.append(" "+resultado)
        cuerpo.style.backgroundColor = 'red'
        document.getElementById('imagen').innerHTML="<img src='../img/suspenso.png'>"
        document.getElementById('notificacion').innerHTML="<h1>HAS SUSPENDIDO</h1>"
        return false
    }
}
let tiempo = 30
var intervalo = window.setInterval(() => {
    tiempo -=1
    if(tiempo>=0){
        form.Enviar.value=`Enviar (${tiempo}s)` 
    }else{
        validar()
    }
}, 1e3)
