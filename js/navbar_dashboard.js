
function navbarDashboard(){
    let $gestion__pedidos = document.querySelector('.gestion__pedidos')
    let $list_dashboard_nav = document.querySelectorAll(".dashboard-icon-nav")
    let $dash_ = document.querySelector(".dash_")

    let $container_vector_ondas = document.getElementById("container-vector-ondas")
    let $container_links = document.querySelector(".container-links")


    $list_dashboard_nav.forEach(nav =>{
        nav.addEventListener("click", ()=>{
            let name_nav = nav.classList[0]
            console.log(name_nav === "gestion_pedidos_")
            if(name_nav === "gestion_pedidos_"){
                console.log($gestion__pedidos)
                $gestion__pedidos.classList.add('gestion__pedidos-show')
                nav.classList.add("dashboard-nav-active")
                document.querySelector('.inicio_').classList.remove('dashboard-nav-active')
            }else if(name_nav === "crear_pedidos_"){
                $gestion__pedidos.classList.remove('gestion__pedidos-show')
                $container_vector_ondas.classList.remove('container-ondas-show')
                $container_links .classList.remove('container-links-show')
                $dash_.classList.remove('dash_show')
                document.getElementById('productos__page').classList.toggle("productos__page-show")
                document.getElementById("productos").classList.toggle("hidden-scroll")
                document.querySelector('.gestion_pedidos_').classList.remove('dashboard-nav-active')
            }else if(name_nav === "inicio_"){
                nav.classList.add('dashboard-nav-active')
                $gestion__pedidos.classList.remove('gestion__pedidos-show')
                document.querySelector('.gestion_pedidos_').classList.remove('dashboard-nav-active')
            }
        })
        
    })

}


window.document.addEventListener("DOMContentLoaded",()=>{
    navbarDashboard()
})