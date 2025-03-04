
export class InputsField{
    /* PRIVATISAMOS LOS ATRIBUTOS */
    #type
    #placeholder
    #id
    #name
    #textContent

    static VALID_TYPE = ["email","text","search","password","number","checkbox","button","submit","reset","date","datetime","datetime-local","file"]

    constructor(type, placeholder = "",id,name, textContent=""){
        if(!InputsField.VALID_TYPE.includes(type)){
            throw Error(`Tipo de input inválido: ${type}. Utiliza uno de: ${InputsField.VALID_TYPE.join(",")}`)
        }
        
        if(typeof placeholder !== "string"){
            throw Error("El placeholder debe ser un string")
        }
        if(typeof id !== "string" && id.trim() === "" ){
            throw Error("El id debe ser un string y no estar vacio")
        }
        if(typeof name !== "string" && name.trim() === "" ){
            throw Error("El name debe ser un string y no estar vacio")
        }
        if(typeof textContent !== "string" ){
            throw Error("El textContent debe ser un string")
        }
        
        this.#type = type
        this.#placeholder = placeholder
        this.#id = id
        this.#name = name 
        this.#textContent = textContent 
    }

    create(){
        const input = document.createElement('input')
        input.type = this.#type
        input.placeholder = this.#placeholder
        input.id = this.#id
        input.name = this.#name
        input.classList = `control control-${this.#type}`
        if(this.#type === "submit"){
            input.textContent = this.#textContent
        }else if (this.#type === "button"){
            input.value = this.#textContent
        }

        return input
    }
}
