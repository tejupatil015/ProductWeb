import React, { useState } from "react";
import products from "./../data/Product";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const ProductList = ({ search, addToCart, addTowish }) => {
  const categories = ["All", "Mens", "Womens", "Onsale", "NewArrival", "Kids"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = products.filter(item => {
    const activecategory =
      (activeTab === "All") ||
      (activeTab === "Onsale" && item.onsale) ||
      (activeTab === "NewArrival" && item.newArrival) ||
      (activeTab === item.category)

    const matchSeacrh = item.name.toLowerCase().includes(search.toLowerCase())


    return activecategory && matchSeacrh;
  })

  return (
    <section id="section-handle" className="products-section">

      <div className="product-heading">
        <p>OUR COLLECTION</p>
        <h2>Explore Our Products</h2>
        <span>
          Discover stylish outfits crafted for every occasion.
        </span>
      </div>

      <div className="category-tabs">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={activeTab === category ? "active" : ""}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="product-grid">
        {
          filteredProducts.length === 0 ?
            <p>No Product Found</p> :


            (filteredProducts.map((product) => {
              return (
                <div className="product-card" key={product.id}>

                  <div className="product-image">

                    {product.onSale && (
                      <span className="sale-badge">SALE</span>
                    )}

                    {product.newArrival && (
                      <span className="new-badge">NEW</span>
                    )}

                    <button className="wishlist" onClick={() => addTowish(product)}>
                      <FaHeart />
                    </button>

                    <img src={product.image} alt={product.name} />

                    <button className="quick-cart" onClick={() => addToCart(product)}>
                      <FaShoppingBag />
                      Add to Cart
                    </button>

                  </div>

                  <div className="product-info">

                    <h3>{product.name}</h3>

                    <div className="price">

                      <span className="current-price">
                        ${product.price}
                      </span>

                      <span className="old-price">
                        ${product.oldPrice}
                      </span>

                    </div>

                  </div>

                </div>
              );
            }))
        }


      </div>

    </section>
  );
};

export default ProductList;