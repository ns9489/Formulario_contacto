const frmEmail = document.getElementById("frm-email")
frmEmail.addEventListener("submit", sendEmail)

const servicedId = "service_q4pof2z"
const templateId = "template_h2vvyb8"
const apikey = "e8FDx6_lKu3ZZ3p7A" 

function sendEmail(event){
    event.preventDefaul()
    emailjs.init(servicedId)

    emailjs.sendForm(servicedId,templateId,frmEmail.apikey)
    .then( rseult => Swal.fire ("Su mensaje se ha enviado con exito"))
    .catch( error => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            Text: "No ha sido posible enviar el mensaje",
        })
    })
}