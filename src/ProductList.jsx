export default function ProductList() {

   const productArr = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    price: 599,
    inStock: true,
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    inStock: false,
  },
  {
    id: 4,
    name: "Camera",
    price: 799,
    inStock: true,
  },
  {
    id: 5,
    name: "Tripod",
    price: 99,
    inStock: false,
  },
];


    return (
        <div>
            {productArr.map((product) => (
                 <div key={product.id}
                 style={{
                         border: '2px solid #e2e8f0',
                         borderRadius: '10px',
                         padding: '20px',
                         margin: '10px',
                         backgroundColor: product.inStock ? 'white' : '#f0f0f0'
                         }}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <p>{product.inStock ? " ✅  In stock" :" ❌ Out of Stock"}</p>
                 </div>))}
        </div>
    )
}