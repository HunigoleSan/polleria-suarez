
function mostrarDashboard(){
    let $dashboard_page = document.getElementById("dashboard")
    let $dashboard_link = document.getElementById("dashboard-link")

    $dashboard_link.addEventListener('click',()=>{
        $dashboard_page.classList.toggle("dash_show")
    })    
}
window.document.addEventListener('DOMContentLoaded',()=>{
    mostrarDashboard()
})