
function ocultarContenedorDeProductos(){
    let $productos__page = document.getElementById("productos__page")
    let $container_vector_ondas = document.getElementById("container-vector-ondas")
    let $nav_mobile = document.querySelector(".nav_mobile")
    let $container_links = document.querySelector(".container-links")

    $nav_mobile.addEventListener('click',()=>{
        $productos__page.classList.toggle("productos__page-show")
        $container_vector_ondas.classList.toggle("container-ondas-show")
        document.getElementById("productos").classList.toggle("hidden-scroll")
        $container_links.classList.toggle("container-links-show")
    })    
}
window.document.addEventListener('DOMContentLoaded',()=>{
    ocultarContenedorDeProductos()
})