
export class Links{

    #href
    #text

    constructor(href,text){
        if(typeof(text) !== "string" || text.trim() === ""){
            throw Error("El tipo del texto debe ser String y no estar vacio.");
        }
        if(typeof(href) !== "string" || href.trim() === ""){
            throw Error("El tipo de enlace debe ser String y no estar vacio.");
        }
        this.#href = href
        this.#text = text
    }

    create(){
        const link = document.createElement('a')
        link.href = this.#href
        link.textContent= this.#text
        link.classList = `link`
        return link
    }
}