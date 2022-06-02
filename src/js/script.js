const main = document.getElementById("main")
const card = document.createElement('ul');

main.appendChild(card);
card.classList.add("containerListaProdutos")
card.id = "listaP"

function cMaker(produtos) {
    card.innerHTML = ""
    for (let i = 0; i < produtos.length; i++) {
        
        const  item  = document.createElement("li")

        const id             = produtos[i].id
        const img            = produtos[i].img
        const name           = produtos[i].nome
        const preco          = produtos[i].preco
        const categoria      = produtos[i].categoria
        const secao          = produtos[i].secao
        
        const  tagDiv        = document.createElement("div")
        const  tagimg        = document.createElement("img")
        const  tagName       = document.createElement("p")
        const  tagPreco      = document.createElement("p")
        const  tagcategory   = document.createElement("p")
        const  tagButton     = document.createElement("div")
        const  tagsecao      = document.createElement("div")

        tagimg.src           = img
        tagName.innerHTML    = `${name}`
        tagPreco.innerHTML   = `Preço: R$ ${preco}`
        tagcategory.innerHTML= `${categoria}`
        //tagButton.innerHTML  = `adicionar`
        //tagButton.id         = id
        tagsecao.innerHTML   = `${secao}`

        //tagButton.addEventListener("click",()=>) 

        tagDiv.classList.add("card")
        tagName.classList.add("nameItem")
        tagPreco.classList.add("preco")
        tagcategory.classList.add("category")
        tagButton.classList.add("adcButton")
        tagsecao.classList.add("secao")

        item.classList.add("item")

        tagDiv.appendChild(tagimg)
        tagDiv.appendChild(tagName)
        tagDiv.appendChild(tagPreco)
        tagDiv.appendChild(tagButton)
        tagDiv.appendChild(tagsecao)
        
        item.appendChild(tagDiv)
        card.appendChild(item)
    }
}

cMaker(produtos)



//Preço:

function vtotal(value) {
    let total = 0
    for (let i = 0; i < value.length; i++){
        total += value[i].preco  
    }
    console.log(total)
    const plotTotal = document.getElementById("total")
    plotTotal.innerText = `Valor total da compra é de ${total}`
}

