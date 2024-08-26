import { createRoot } from 'react-dom/client'
import React from 'react'
import './style.css'


function Navbar(){
    return (
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </nav>
    )
}
function Card(Carddetails){
    const{id,title,brand,image,price} = Carddetails
    return (
        <div className='card' key={id}>
               <img src={image} alt={title} />
             <div className='card-content'>
            <h3>{title}</h3>
            <p>{brand}</p>
          <p><b>${price}</b></p>
           </div>
        </div>
    )
}
const root = createRoot(document.getElementById("root"));
// fetch('https://dummyjson.com/products')
//   .then(res => res.json())
//   .then(data =>{
//     console.log(data)
//       const container2 = 
//       data.products.map((product=>{
//         return Card(
//             product.id,
//             product.title,
//             product.brand,
//             product.thumbnail,
//             product.price
            
//         );

//       }))
//       console.log(container2)
//       root.render(
//         <>
//        <Navbar />
//        <div className='Container'>{container2}</div>
//        </>
//        ) })
fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data =>{
    console.log(data)
      root.render(<>
       <Navbar />
       <div className='Container'> 
        {data.products.map((product=>{
        return Card({
            key:product.id,
            image:product.thumbnail,
            brand:product.brand,
            title:product.title,
            price:product.price 
        });
      }))}
      </div>
       </>
       )})












