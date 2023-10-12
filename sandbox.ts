import { v4 as uuidv4} from 'uuid'

//  MAKE SURE YOU DO THIS :npm install --save-dev @types/uuid

// Define a Type for InventoryItem
type InventoryItem = {
    id: string;
    name: string;
    description: string;
    price: number
}



// Define a Type for ShoppingCart

type ShoppingCart = {
    id: string;
    items : InventoryItem[]
}

// createInventoryItem function
function createInventoryItem(name:string, description:string, price:number): InventoryItem {
    return{
        id: uuidv4(),
        name,
        description,
        price
    }
}


// createShoppingCart function
function createShoppingCart(): ShoppingCart {
    return{
        id: uuidv4(),
        items: []
    }
}



// addToCart function
function addToCart(cart: ShoppingCart, item: InventoryItem): void {
    cart.items.push(item)
}



// removeFromCart function
function removeFromCart(cart: ShoppingCart, itemID: string): void {
    cart.items = cart.items.filter(item => item.id != itemID )
}


// printCart function
function printCart(cart: ShoppingCart): void {
    console.log('Items in cart:')
    cart.items.forEach(item => {
        console.log(`${item.name} - $${item.price}`)
    })
}




// getCartTotal function


function getCartTotal(cart: ShoppingCart): number {
    let total = 0
  
    cart.items.forEach(item => {
        total += item.price
    })
    return total
}


const cart = createShoppingCart()


const item1 = createInventoryItem('Apple Bananna Bread', 'Some bussy ass bread', 10.99)
const item2 = createInventoryItem('Pumpkin Pie', 'Baby food pie', 15.99)
const item3 = createInventoryItem('Pecan Pie', 'The best pie', 12.99)

addToCart(cart, item1)
addToCart(cart, item2)
addToCart(cart, item3)
printCart(cart)
console.log(`Total: $${getCartTotal(cart)}`)

removeFromCart(cart, item1.id)
printCart(cart)
console.log(`Total: $${getCartTotal(cart)}`)