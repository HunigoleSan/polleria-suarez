function backNavbar(){
    let $back_navbar = document.querySelectorAll('.back_navbar')

    $back_navbar.forEach(back => {
        back.addEventListener('click', () =>{
            console.log(back)
            if(back.classList.contains('gestion__pedidos_back')){
                let $gestion__pedidos = document.querySelector('.gestion__pedidos')
                $gestion__pedidos.classList.remove("gestion__pedidos-show")
                document.querySelector('.gestion_pedidos_').classList.remove('dashboard-nav-active')
                document.querySelector('.inicio_').classList.add('dashboard-nav-active')
            }
        })
    })
}
window.document.addEventListener("DOMContentLoaded",()=>{
    backNavbar()
})