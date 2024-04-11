import { useState,useEffect } from "react";

import './index.css'
function LoadData() {

    const[loading , setloading ] = useState(true);
    const [products,setproducts] = useState([]);
    const [count,setcount] = useState(0);

    async function fetchproducts( ){

        try{
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 10}`);
            setloading(true);
            const result = await response.json();
            count===0 ? setproducts(result.products) : setproducts((prevdata)=>[...prevdata,...result.products])
            
            console.log(result.products);
        }
        catch(e)
        {
            setloading(false);
            console.log(e);
        }
         

    }
    useEffect(()=>{

        fetchproducts();
    },[count]);
    useEffect(()=>{

        products.length ===100 ? setloading(false) : null;
      }
      ,[products])  ;
    return (
        <div className="container">
            <div className="item-container">
              {
                products.map((items)=>(<div  className="products">

                    <img src={items.thumbnail} alt="" />
                    <div>
                    <h3>Brand:{items.brand}</h3>
                    <h1>Category:{items.category}</h1>
                    <p><b>Description</b>:{items.description}</p>
                    <h2>Price:{items.price}</h2>
                    <h2>Ratings:{items.rating}</h2>
                    </div>

                </div>))
                
              }

                   <button onClick={()=>setcount(count+1)} disabled={loading===false}>Load More</button>
            </div>
        </div>
    )
}

export default LoadData;


// import { useEffect } from "react";
// import { useState } from "react";
// import "./index.css";

// export default function LoadMoreData() {
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [disableButton, setDisableButton] = useState(false);

//   async function fetchProducts() {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=20&skip=${
//           count === 0 ? 0 : count * 20
//         }`
//       );

//       const result = await response.json();

//       if (result && result.products && result.products.length) {
//         setProducts((prevData) => [...prevData, ...result.products]);
//         setLoading(false);
//       }

//       console.log(result);
//     } catch (e) {
//       console.log(e);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, [count]);

//   useEffect(() => {
//     if (products && products.length === 100) setDisableButton(true);
//   }, [products]);

//   if (loading) {
//     return <div>Loading data ! Please wait.</div>;
//   }

//   return (
//     <div className="load-more-container">
//       <div className="product-container">
//         {products && products.length
//           ? products.map((item) => (
//               <div className="product" key={item.id}>
//                 <img src={item.thumbnail} alt={item.title} />
//                 <p>{item.title}</p>
//               </div>
//             ))
//           : null}
//       </div>
//       <div className="button-container">
//         <button disabled={disableButton} onClick={() => setCount(count + 1)}>
//           Load More Products
//         </button>
//         {disableButton ? <p>You have reached to 100 products</p> : null}
//       </div>
//     </div>
//   );
// }