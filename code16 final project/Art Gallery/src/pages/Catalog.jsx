import { useState, useEffect } from "react";

function Catalog(props) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    price: {min:40, max: 500},
    size: "",
    genre: "",
    material: "",
    basis: "",
    color: "",
  });

  useEffect(() => {
    fetch('/src/data/catalog.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Veri çekme hatası:', error));
  }, []);

  // Filtrelenmiş ürünleri döndüren fonksiyon
  const getFilteredProducts = () => {
    let filteredProducts = products;
  
    if (filters.price) {
      filteredProducts = filteredProducts.filter(
        (product) => parseFloat(product.price) <= parseFloat(filters.price.max)
      );
    }else if (filters.size) {
      filteredProducts = filteredProducts.filter(
        (product) => product.size === filters.size
      );
    }else if (filters.genre) {
      filteredProducts = filteredProducts.filter(
        (product) => product.genre === filters.genre
      );
    }else if (filters.material) {
      filteredProducts = filteredProducts.filter(
        (product) => product.material === filters.material
      );
    }else if (filters.basis) {
      filteredProducts = filteredProducts.filter(
        (product) => product.basis === filters.basis
      );
    }else if (filters.color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filters.color
      );
    }
  
    return filteredProducts;
  };
 return (
  <>
    <div className="container">
      <h1>Catalog</h1>
      {/* Filtre bileşeni */}
      <div className="row col-sm-3 mb-3">
        <div style={{borderBottom: "1px solid"}}>
          <label htmlFor="priceRange">Price Range: ${filters.price.min} - ${filters.price.max}</label>
          <input
            type="range"
            id="priceRange"
            min="40"
            max="500"
            step="1"
            value={filters.price.max}
            onChange={(e) =>
              setFilters({ ...filters, price: { ...filters.price, max: parseFloat(e.target.value) } })
            }
          />
        </div>
        <div style={{borderBottom: "1px solid"}}>
          <label htmlFor="sizeFilter">To size:</label><br />
          <label>
            <input
              type="checkbox"
              value="small"
              checked={filters.size === "small"}
              onChange={() => setFilters({ ...filters, size: filters.size === "small" ? "" : "small" })}
            />
            Small
          </label><br />
          <label>
            <input
              type="checkbox"
              value="medium"
              checked={filters.size === "medium"}
              onChange={() => setFilters({ ...filters, size: filters.size === "medium" ? "" : "medium" })}
            />
            Medium
          </label><br />
          <label>
            <input
              type="checkbox"
              value="large"
              checked={filters.size === "large"}
              onChange={() => setFilters({ ...filters, size: filters.size === "large" ? "" : "large" })}
            />
            Large
          </label>
        </div>
        <div style={{borderBottom: "1px solid"}}>
          <label htmlFor="genreFilter">By genre:</label><br />
          <label>
            <input
              type="checkbox"
              value="abstraction"
              checked={filters.size === "abstraction"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "abstraction" ? "" : "abstraction" })}
            />
            Abstraction
          </label><br />
          <label>
            <input
              type="checkbox"
              value="scenery"
              checked={filters.size === "scenery"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "scenery" ? "" : "scenery" })}
            />
            Scenery
          </label><br />
          <label>
            <input
              type="checkbox"
              value="stillLife"
              checked={filters.genre === "stillLife"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "stillLife" ? "" : "stillLife" })}
            />
            Still life
          </label><br />
          <label>
            <input
              type="checkbox"
              value="portrait"
              checked={filters.genre === "portrait"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "portrait" ? "" : "portrait" })}
            />
            Portrait
          </label><br />
          <label>
            <input
              type="checkbox"
              value="3dPaintings"
              checked={filters.genre === "3dPaintings"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "3dPaintings" ? "" : "3dPaintings" })}
            />
            3D paintings
          </label><br />
          <label>
            <input
              type="checkbox"
              value="prints"
              checked={filters.genre === "prints"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "prints" ? "" : "prints" })}
            />
            Prints
          </label><br />
          <label>
            <input
              type="checkbox"
              value="posters"
              checked={filters.genre === "posters"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "posters" ? "" : "posters" })}
            />
            Posters
          </label><br />
          <label>
            <input
              type="checkbox"
              value="collages"
              checked={filters.genre === "collages"}
              onChange={() => setFilters({ ...filters, genre: filters.genre === "collages" ? "" : "collages" })}
            />
            Collages
          </label>
        </div>

          {/* Diğer filtre seçenekleri buraya eklenir */}
      </div>
      <div className="row">
        <div className="container">
          <div className="row">
            {getFilteredProducts().map((product) => (
              <div key={product.id} className="row col-sm-4 mb-4">
                <div className="card mb-3 border-0" style={{width: "18rem"}}>
                  <img src={product.image}  />
                  <div className="card-body">
                    <p className="mb-0 d-flex justify-content-between" style={{
                      color: "#10101C", 
                      fontFamily: "Nunito Sans", 
                      fontSize: "16px", 
                      fontStyle: "normal", 
                      fontWeight: "600", 
                      lineHeight: "20px"}}
                    >
                      {product.name}
                      <span className="d-flex justify-content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                      </span>
                    </p>
                    <p className="mb-0"  style={{color: "#10101C", fontFamily: "Nunito Sans", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20px"}}>{product.description}</p>
                    <p style={{color: "#10101C", fontFamily: "Nunito Sans", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "20px"}}>${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
 )
}

export default Catalog;