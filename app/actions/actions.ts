import { Product } from "@/types/Product";
import Cart from "../Cart/page";

export const addtoCart = (product: Product) => {

    //Saving items in local storage
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    //Product Index 
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if(existingProductIndex > -1 ) {
        cart[existingProductIndex].stockLevel += 1
    }
    else {
        cart.push({
            ...product, stockLevel: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(Cart)
}

//removing items from cart
export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item.id !== productId )
    localStorage.setItem('cart' , JSON.stringify(cart))
}

//update cart quantity
export const updateCartQuantity = (productId : string , quantity: number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item.id === productId)

    if (productIndex > -1) {
        cart[productIndex].stockLevel = quantity
    }
}

//How to get items in cart into the Cart page
export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export default addtoCart;