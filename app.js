const frmEmail = document.getElementById("frm-email")
frmEmail.addEventListener("submit", sendEmail)
const serviceId = "service_q4pof2z"
const templateId = "template_h2vvyb8"
const apikey = "e8FDx6_lKu3ZZ3p7A" 

function sendEmail(event){
    event.preventDefault()
    // emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail)
    .then( result => Swal.fire ("Su mensaje se ha enviado con exito"))
    .catch( error => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No ha sido posible enviar el mensaje",
        })
    })
}
