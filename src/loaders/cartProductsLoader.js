import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
    const LoadedProducts = await fetch("products.json");
    const products = await LoadedProducts.json();

    // if cart data is in database, i have to use async await
    
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart)
    {
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct)
        {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}
export default cartProductsLoader;