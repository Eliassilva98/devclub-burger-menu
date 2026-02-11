const list = document.querySelector('.cards')
const buttonShowAll = document.querySelector('.showAll')
const buttonMapAll = document.querySelector('.mapAll')
const buttonSumAll = document.querySelector('.sumAll')
const buttonFilterAllVegan = document.querySelector('.filterAllVegan')

function formatValue( value) {
    return value = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function showAll(productsArray) {
   
   let myLi = ''
   productsArray.forEach( product => {
   myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="itemPrice">${formatValue(product.price)}</p>
        </li>
    
    `
    list.innerHTML = myLi
    
})
}

function mapAllItems() {
    const newPrices = menuOptions.map( (product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalPrice = menuOptions.reduce( (acc, curr) => acc + curr.price * 0.9, 0)

    list.innerHTML = `<p> O Valor total é de: ${formatValue(totalPrice)}</p>`
}

function filterVegan() {
    const veganOptions = menuOptions.filter( product => product.vegan)

    showAll(veganOptions)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAllVegan.addEventListener('click', filterVegan)



