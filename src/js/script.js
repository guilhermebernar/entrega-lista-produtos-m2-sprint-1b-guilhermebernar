const main = document.getElementById("main")
const card = document.createElement('ul');

main.appendChild(card);
card.classList.add("containerListaProdutos")
card.id = "listaP"

function cMaker(produtos) {
    card.innerHTML = ""
    for(let i = 0; i < produtos.length; i++) {
        
        const  item  = document.createElement("li")

        const id             = produtos[i].id
        const img            = produtos[i].img
        const name           = produtos[i].nome
        const preco          = produtos[i].preco
        const categoria      = produtos[i].categoria
        const secao          = produtos[i].secao
        const componentes    = produtos[i].componentes
        
        const  tagDiv        = document.createElement("div")
        const  tagimg        = document.createElement("img")
        const  tagName       = document.createElement("p")
        const  tagPreco      = document.createElement("p")
        const  tagcategory   = document.createElement("p")
        const  tagButton     = document.createElement("div")
        const  tagButtonImg  = document.createElement("img") 
        const  tagsecao      = document.createElement("div")
        const  tagcompo      = document.createElement("div")

        tagimg.src           = img
        tagName.innerHTML    = `${name}`
        tagPreco.innerHTML   = `Preço: R$ ${preco}`
        tagcategory.innerHTML= `${categoria}`
        tagButtonImg.src     = "./src/img/addCart.png"
        tagButton.id         = id
        tagsecao.innerHTML   = `${secao}`
        tagcompo.innerHTML   = `Nutrientes:<br>${componentes[0]}<br>${componentes[1]}<br>${componentes[2]}<br>${componentes[3]}`

        tagDiv.classList.add("card")
        tagName.classList.add("nameItem")
        tagPreco.classList.add("preco")
        tagcategory.classList.add("category")
        tagButton.classList.add("adcButton")
        tagButtonImg.classList.add("imgAddCart")
        tagsecao.classList.add("secao")
        tagcompo.classList.add("compo")

        item.classList.add("item")
        tagButton.addEventListener("click", addToCart)
        //tagButtonImg.addEventListener("click",)

        
        tagDiv.appendChild(tagimg)
        tagDiv.appendChild(tagName)
        tagDiv.appendChild(tagPreco)
        tagDiv.appendChild(tagButton)
        tagDiv.appendChild(tagsecao)
        tagDiv.appendChild(tagcompo)

        tagButton.appendChild(tagButtonImg)
        
        item.appendChild(tagDiv)
        card.appendChild(item)
    }
}

cMaker(produtos)
