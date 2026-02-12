import { useState } from "react"

export default function ShoppingCart (){ 

    const[cartItems, setCartItems] = useState([
        {id: 1, name: "Laptop", price: 999, quantity: 1},
        {id: 2, name: "Mouse", price: 29, quantity: 2},
        {id: 3, name: "Keyboard", price: 79, quantity: 1}
    ]);


    const increaseQuantity= (id) =>{
        setCartItems (
            cartItems.map((item) =>
            item.id === id
            ? {...item, quantity: item.quantity +1} :item
        )
        );
    }

    const decreaseQuantity =(id) =>{
        setCartItems (
            cartItems.map((item) =>
                item.id ===id && item.quantity > 1
                ? {...item, quantity: item.quantity-1
                } :item
            )
        );
    }

    const Remove=(id)=>{
      setCartItems(cartItems.filter((item) => item.id !== id));

    } 

    return (
        <div>
            <h3>Shopping Cart</h3>

            {cartItems.map((item) =>(
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <p>{item.quantity}</p>
                    <p>{cartItems.reduce((total,item) => total + (item.price * item.quantity), 0)}</p>
                   <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
                    <button onClick={() =>increaseQuantity(item.id)}>Increase</button>
                    <button onClick={() =>Remove(item.id)}>Remove</button>
                </div>
            ))}
            
        </div>
    )
} 