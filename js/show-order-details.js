function showOrderDetails() {
    let $table__rows = document.querySelectorAll(".table__row")

    $table__rows.forEach(row => {
        row.addEventListener('click', (e) => {
            let $more_data = row.querySelector('.more_data')
            let $more_data_info_description = row.querySelector('.more_data_info_description')
            let $linear_gradient = row.querySelector('.linear-gradient')

            if (row.classList.contains("table__row-show")) {
                $more_data_info_description.classList.remove("show-data")
                setTimeout(() => {
                    $linear_gradient.classList.remove("show-data")
                    $more_data.classList.remove("show-data")
                    row.classList.remove("table__row-show")
                }, 400)
                return
            }
            
            resetAnimation()

            if ($more_data_info_description && $linear_gradient) {
                $more_data.classList.add("show-data")
                row.classList.add("table__row-show")
                $linear_gradient.classList.add("show-data")
                setTimeout(() => {
                    $more_data_info_description.classList.add("show-data")
                }, 200)
            }

        })
    })
}

function removerClassActive(clase, listElements) {
    let $listElements_show = document.querySelectorAll(listElements)
    $listElements_show.forEach(element => {
        element.classList.remove(clase)
    })
}

function resetAnimation() {
    removerClassActive('show-data', ".more_data_info_description")
    removerClassActive('show-data', ".linear-gradient")
    removerClassActive('show-data', ".more_data")
    removerClassActive('table__row-show', ".table__row")
}


window.document.addEventListener("DOMContentLoaded", () => {
    showOrderDetails()
})