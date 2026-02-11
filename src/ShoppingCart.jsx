import { useState } from "react"

export default function ShoppingCart (){ 

    const[cartItems, setCartItems] = useState([
        {id: 1, name: "Laptop", price: 999, quantity: 1},
        {id: 2, name: "Mouse", price: 29, quantity: 2},
        {id: 3, name: "Keyboard", price: 79, quantity: 1}
    ]);


    const increaseQuanity= (id) =>{
        setCartItems (
            cartItems.map((item) =>
            item.id === id
            ? {...item, quantity: item.quantity +1} :item
        )
        );
    }

    const decreaseQuanity =(id) =>{
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
                    <p>SubTotal: {item.price * item.quantity}</p>
                   <button onClick={() => decreaseQuanity(item.id)}>Decrease</button>
                    <button onClick={() =>increaseQuanity(item.id)}>Increase</button>
                    <button onClick={() =>Remove(item.id)}>Remove</button>
                </div>
            ))}
            
        </div>
    )
} 