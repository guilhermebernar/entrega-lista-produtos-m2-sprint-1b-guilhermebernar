///////////////////////////////////////////////
//CARRINHO DE COMPRA:

const cartPlace = document.getElementById('cart')
const cart          = document.createElement('ul')
const valorDaCompra = document.createElement('h3')

cart.classList.add("carrinho")
cartPlace.appendChild(cart);

let dataCart = []

function criarCart(){

    cart.innerHTML = ""

    for (let i = 0; i <dataCart.length; i++){
        const  itemIn  = document.createElement("li")
    
        const name  = dataCart[i].nome
        const value = dataCart[i].preco
        
        const  tag2Div          = document.createElement("div")
        const  tag2Name         = document.createElement("p")
        const  tag2Value        = document.createElement("p")
        const  tag2RmvButton    = document.createElement("button")

        tag2Name.innerHTML      = `${name}`
        tag2Value.innerHTML     = `Preço: R$ ${value}`
        tag2RmvButton.innerHTML = "Remover"

        tag2Div.classList.add("itemList")
        tag2Name.classList.add("nameItem")
        tag2Value.classList.add("value")
        tag2RmvButton.classList.add("rmvButton")
        tag2RmvButton.id = dataCart[i].id
        tag2RmvButton.addEventListener("click", (event)=>rmvCart(event))


        tag2Div.appendChild(tag2Name)
        tag2Div.appendChild(tag2Value)
        tag2Div.appendChild(tag2RmvButton)
        
        itemIn.appendChild(tag2Div)
        cart.appendChild(itemIn)

        //if (dataCart > 0){
        // const button = document.createElement('button')
        // button.innerText = "Finalizar"
        // button.appendChild(total)
        // }

        const total = document.createElement('h3')
        cartPlace.appendChild(total)
        valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(dataCart)} </strong>`
    }
}

///////////////////////////////////////////////
//Adicionando ao carrinho:
function addToCart(event){
    const inn = event.currentTarget.id
    console.log(inn)
    for (let i = 0; i < produtos.length; i++){
        let item = produtos[i]
        if (item.id == inn){
           let inn = produtos[i]
           dataCart.push(inn)
           criarCart(inn)
        }
    }
}

///////////////////////////////////////////////
//Remover do carrinho:
function rmvCart(event) {
    const out = event.target.id
    for(let i = 0; i < dataCart.length; i++){
        if(out == dataCart[i].id){
            dataCart.splice(i, 1);
            console.log(dataCart)
            criarCart(dataCart)          
        }
    }
    const total = document.createElement('h3')
    cartPlace.appendChild(total)
    valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(dataCart)} </strong>`

    console.log(dataCart)
}

const totalPrice = document.createElement('h3')
cartPlace.appendChild(totalPrice)

///////////////////////////////////////////////
//Preço:

function vtotal(value) {
    let total = 0
    for (let i = 0; i < value.length; i++){
        total += Number(value[i].preco)  
    }

    const plotTotal = document.getElementById("total")
    plotTotal.innerText = `Valor total da compra é de ${total}`
}
