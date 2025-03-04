import { InputsField } from "./clases/inputs.js";
import { Links } from "./clases/links.js";
window.document.addEventListener("DOMContentLoaded",() =>{
    const $login = document.getElementById('login')
    const $productos = document.getElementById("productos")
    try {

        
        const inputEmail = new InputsField('email','example.123@gmail.com','email','email')
        const inputButton = new InputsField('button',"",'btn-ingresar','btn-ingresar',"Ingresar")
        const inputPassword = new InputsField('password','Digite su contraseña','password','password')
        const linkForgotYourPassword = new Links('www.google.com','¿Olvidaste tu contraseña? recuperala aquí')
        const containerForm = document.createElement("div")
        const containerControls = document.createElement("div")

        
        containerForm.classList = "login__form"
        containerControls.classList = "login__containerControls"
        
        
        /* Envolvemos primeros los controaldores */
        containerControls.insertAdjacentElement("beforeend",inputEmail.create())
        containerControls.insertAdjacentElement("beforeend",inputPassword.create())

        /* Ahora envolvemos el Link con el ContainerControls */
        containerForm.insertAdjacentElement("beforeend",containerControls)
        containerForm.insertAdjacentElement("beforeend",linkForgotYourPassword.create())
        /* Envolvemos container form en login  */
        $login.insertAdjacentElement("beforeend",containerForm)
        $login.insertAdjacentElement("beforeend",inputButton.create())

        window.document.querySelector(".control-button").addEventListener('click', ()=>{
            $productos.classList.toggle("pro_show")
        })

        

    } catch (error) {
        console.error(error.message)
    }

})