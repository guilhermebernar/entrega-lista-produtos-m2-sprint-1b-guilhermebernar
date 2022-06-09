let all = document.querySelector(".btnAll")
all.addEventListener("click", () => {
    document.getElementById("listaP").innerHTML = ""
    cMaker(produtos)
    //vtotal(produtos)

})

///////////////////////////////////////////////////////
////////////////////// BOTÕES: ////////////////////////
///////////////////////////////////////////////////////
let Hortifruti = document.querySelector("#Hortifruti")
Hortifruti.addEventListener("click", ()=> {
    document.getElementById("listaP").innerHTML = ""
    hortiFilter()
})
function hortiFilter() {
    
    const filter = produtos.filter((produto) => {
        return produto.secao === "Hortifruti"
    })
    cMaker(filter)
    //vtotal(filter)
}

///////////////////////////////////////////////////////
let Panificadora = document.querySelector("#Panificadora")
Panificadora.addEventListener("click", ()=> {
    document.getElementById("listaP").innerHTML = ""
    panisFilter()
})
function panisFilter() {
    
    const filter = produtos.filter((produto) => {
        return produto.secao === "Panificadora"
    })
    cMaker(filter)
    //vtotal(filter)
}

///////////////////////////////////////////////////////
let Laticinio = document.querySelector("#Laticinio")
Laticinio.addEventListener("click", ()=> {
    document.getElementById("listaP").innerHTML = ""
    lactFilter()
})
function lactFilter() {
    
    const filter = produtos.filter((produto) => {
        return produto.secao === "Laticinio"
    })
    cMaker(filter)
    //vtotal(filter)
}

///////////////////////////////////////////////////////
////////////////////// PESQUISA: //////////////////////
///////////////////////////////////////////////////////

function searchEvent(){
    const btnSearch = document.getElementById("btnS")
    btnSearch.addEventListener("click", searchFilter)
}
searchEvent() 

function filterBySearch(db, arr){
    const prodFiltered = db.filter(({nome,secao,categoria}) => nome.toUpperCase().trim().includes(arr.toUpperCase().trim())||secao.toUpperCase().trim().includes(arr.toUpperCase().trim())||categoria.toUpperCase().trim().includes(arr.toUpperCase().trim())
        
    )

    return prodFiltered;
}

function searchFilter(event){
    event.preventDefault()
 
    const {value: inputSearch} = document.getElementById("search")

    const filterList =  filterBySearch(produtos, inputSearch)
    
    cMaker(filterList)
}