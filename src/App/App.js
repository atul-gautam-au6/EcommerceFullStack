import React from 'react'
import '..'
const App = () => {
  return (
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onclick="openMenu">
                &#9776
            </button>
            <a href="index.html">amazona</a>
        </div>
        <div className="header-link">
            <a href="cart.html">cart</a>
            <a href="sigin.html">Sign In</a>
        </div>
    </header>

    <aside className="sidebar">
         <h3>Shopping Categories</h3>
         <button className="sidebar-close-button" onclick="closeMenu()">X</button>
         <ul>
             <li>
                 <a href="index.html">Pants</a>
             </li>
             <li>
                 <a href="index.html">Pants</a>
             </li>
         </ul>
    </aside>
    
    <main className="main">
       <div className="content">
           <ul className="products">
               <li>
                   <div className="product">
                       <img src="./image/slim_shirt.jpg" alt="" className="product-image">
                       <div className="product-name">
                             <a href="product.html">
                                 Slim-Shirt
                             </a>  
                         </div>
                       <div className="product-brand">Nike</div>
                       <div className="product-price">$60</div>
                       <div className="product-rating">4.5 start(10 Review)</div>
                   </div>
               </li>
               <li>
                   <div className="product">
                       <img src="./image/slim_shirt.jpg" alt="" className="product-image">
                       <div className="product-name">
                             <a href="product.html">
                                 Slim-Shirt
                             </a>  
                         </div>
                       <div className="product-brand">Nike</div>
                       <div className="product-price">$60</div>
                       <div className="product-rating">4.5 start(10 Review)</div>
                   </div>
               </li>
               <li>
                   <div className="product">
                       <img src="./image/slim_shirt.jpg" alt="" className="product-image">
                       <div className="product-name">
                             <a href="product.html">
                                 Slim-Shirt
                             </a>  
                         </div>
                       <div className="product-brand">Nike</div>
                       <div className="product-price">$60</div>
                       <div className="product-rating">4.5 start(10 Review)</div>
                   </div>
               </li>
               <li>
                   <div className="product">
                       <img src="./image/slim_shirt.jpg" alt="" className="product-image">
                       <div className="product-name">
                             <a href="product.html">
                                 Slim-Shirt
                             </a>  
                         </div>
                       <div className="product-brand">Nike</div>
                       <div className="product-price">$60</div>
                       <div className="product-rating">4.5 start(10 Review)</div>
                   </div>
               </li>
               <li>
                   <div className="product">
                       <img src="./image/slim_shirt.jpg" alt="" className="product-image">
                       <div className="product-name">
                             <a href="product.html">
                                 Slim-Shirt
                             </a>  
                         </div>
                       <div className="product-brand">Nike</div>
                       <div className="product-price">$60</div>
                       <div className="product-rating">4.5 start(10 Review)</div>
                   </div>
               </li>
              
           </ul>
       </div>
    </main>
    <footer className="footer">
        all right reserverd
    </footer>
</div>
  )
}

export default App
