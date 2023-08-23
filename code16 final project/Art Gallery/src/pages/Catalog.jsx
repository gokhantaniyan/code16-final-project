import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



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
    }
    if (filters.size) {
      filteredProducts = filteredProducts.filter(
        (product) => product.size === filters.size
      );
    }
    if (filters.genre) {
      filteredProducts = filteredProducts.filter(
        (product) => product.genre === filters.genre
      );
    }
    if (filters.material) {
      filteredProducts = filteredProducts.filter(
        (product) => product.material === filters.material
      );
    }
    if (filters.basis) {
      filteredProducts = filteredProducts.filter(
        (product) => product.basis === filters.basis
      );
    }
    if (filters.color) {
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
      <div className="row mb-3">
        <div className="col-sm-3">
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
          {/* Size filter start */}
          <div style={{borderBottom: "1px solid"}}>
            <label className="filter-header" htmlFor="sizeFilter">To size</label><br />
            <label>
              <input
                type="checkbox"
                value="small"
                checked={filters.size === "small"}
                onChange={() => setFilters({ ...filters, size: filters.size === "small" ? "" : "small" })}
              />
              <span className="filter-item">Up to 40 cm</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="medium"
                checked={filters.size === "medium"}
                onChange={() => setFilters({ ...filters, size: filters.size === "medium" ? "" : "medium" })}
              />
              <span className="filter-item">40 - 100 cm</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="large"
                checked={filters.size === "large"}
                onChange={() => setFilters({ ...filters, size: filters.size === "large" ? "" : "large" })}
              />
              <span className="filter-item">Over 100 cm</span>
            </label>
          </div>
          {/* Size filter end */}
          {/* Genre filter start */}
          <div style={{borderBottom: "1px solid"}}>
            <label className="filter-header" htmlFor="genreFilter">By genre</label><br />
            <label>
              <input
                type="checkbox"
                value="abstraction"
                checked={filters.genre === "abstraction"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "abstraction" ? "" : "abstraction" })}
              />
              <span className="filter-item">Abstraction</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="scenery"
                checked={filters.genre === "scenery"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "scenery" ? "" : "scenery" })}
              />
              <span className="filter-item">Scenery</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="stillLife"
                checked={filters.genre === "stillLife"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "stillLife" ? "" : "stillLife" })}
              />
              <span className="filter-item">Still life</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="portrait"
                checked={filters.genre === "portrait"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "portrait" ? "" : "portrait" })}
              />
              <span className="filter-item">Portrait</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="3dPaintings"
                checked={filters.genre === "3dPaintings"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "3dPaintings" ? "" : "3dPaintings" })}
              />
            <span className="filter-item">3D paintings</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="prints"
                checked={filters.genre === "prints"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "prints" ? "" : "prints" })}
              />
              <span className="filter-item">Prints</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="posters"
                checked={filters.genre === "posters"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "posters" ? "" : "posters" })}
              />
              <span className="filter-item">Posters</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="collages"
                checked={filters.genre === "collages"}
                onChange={() => setFilters({ ...filters, genre: filters.genre === "collages" ? "" : "collages" })}
              />
              <span className="filter-item">Collages</span>
            </label>
          </div>
          {/* Genre filter end */}
          {/* Material filter start */}
          <div style={{borderBottom: "1px solid"}}>
            <label className="filter-header" htmlFor="materialFilter">By material</label><br />
            <label>
              <input
                type="checkbox"
                value="acrylic"
                checked={filters.material === "acrylic"}
                onChange={() => setFilters({ ...filters, material: filters.material === "acrylic" ? "" : "acrylic" })}
              />
              <span className="filter-item">Acrylic</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="oil"
                checked={filters.material === "oil"}
                onChange={() => setFilters({ ...filters, material: filters.material === "oil" ? "" : "oil" })}
              />
              <span className="filter-item">Oil</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="fluid-art"
                checked={filters.material === "fluid-art"}
                onChange={() => setFilters({ ...filters, material: filters.material === "fluid-art" ? "" : "fluid-art" })}
              />
              <span className="filter-item">Fluid Art</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="watercolor"
                checked={filters.material === "watercolor"}
                onChange={() => setFilters({ ...filters, material: filters.material === "watercolor" ? "" : "watercolor" })}
              />
              <span className="filter-item">Watercolor</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="pastel"
                checked={filters.material === "pastel"}
                onChange={() => setFilters({ ...filters, material: filters.material === "pastel" ? "" : "pastel" })}
              />
              <span className="filter-item">Pastel</span>
            </label>
          </div>
          {/* Material filter end */}
          {/* Basis filter start */}
          <div style={{borderBottom: "1px solid"}}>
            <label className="filter-header" htmlFor="basisFilter">By basis</label><br />
            <label>
              <input
                type="checkbox"
                value="canvas"
                checked={filters.basis === "canvas"}
                onChange={() => setFilters({ ...filters, basis: filters.basis === "canvas" ? "" : "canvas" })}
              />
              <span className="filter-item">Canvas</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="wood"
                checked={filters.basis === "wood"}
                onChange={() => setFilters({ ...filters, basis: filters.basis === "wood" ? "" : "wood" })}
              />
              <span className="filter-item">Wood</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="cardboard"
                checked={filters.basis === "cardboard"}
                onChange={() => setFilters({ ...filters, basis: filters.basis === "cardboard" ? "" : "cardboard" })}
              />
              <span className="filter-item">Cardboard</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="art-paper"
                checked={filters.basis === "art-paper"}
                onChange={() => setFilters({ ...filters, basis: filters.basis === "art-paper" ? "" : "art-paper" })}
              />
              <span className="filter-item">Art paper</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="glass"
                checked={filters.basis === "glass"}
                onChange={() => setFilters({ ...filters, basis: filters.basis === "glass" ? "" : "glass" })}
              />
              <span className="filter-item">Glass</span>
            </label>
          </div>
          {/* Basis filter end */}
          {/* Color filter start */}
          <div style={{borderBottom: "1px solid"}}>
            <label className="filter-header" htmlFor="colorFilter">By color</label><br />
            <label>
              <input
                type="checkbox"
                value="blue"
                checked={filters.color === "blue"}
                onChange={() => setFilters({ ...filters, color: filters.color === "blue" ? "" : "blue" })}
              />
              <span className="filter-item">Blue</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="red"
                checked={filters.color === "red"}
                onChange={() => setFilters({ ...filters, color: filters.color === "red" ? "" : "red" })}
              />
              <span className="filter-item">Red</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="green"
                checked={filters.color === "green"}
                onChange={() => setFilters({ ...filters, color: filters.color === "green" ? "" : "green" })}
              />
              <span className="filter-item">Green</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="gold"
                checked={filters.color === "gold"}
                onChange={() => setFilters({ ...filters, color: filters.color === "gold" ? "" : "gold" })}
              />
              <span className="filter-item">Gold</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="silver"
                checked={filters.color === "silver"}
                onChange={() => setFilters({ ...filters, color: filters.color === "silver" ? "" : "silver" })}
              />
              <span className="filter-item">Silver</span>
            </label><br />
            <label>
              <input
                type="checkbox"
                value="beige"
                checked={filters.color === "beige"}
                onChange={() => setFilters({ ...filters, color: filters.color === "beige" ? "" : "beige" })}
              />
              <span className="filter-item">Beige</span>
            </label>
          </div>
          {/* Color filter end */}
          {/* Clear filter start */}
          <div className="mt-3">
            <span
              className="clear-filter" 
              onClick={() =>
                setFilters({
                  ...filters,
                  size: "",
                  genre: "",
                  material: "",
                  basis: "",
                  color: "",
                })
              }
            >
              Clear filter
            </span>
          </div>
          {/* Clear filter end */}
          {/* Diğer filtre seçenekleri buraya eklenir */}
        </div>
        <div className="col-sm ">
          <div className="container">
            <div className="row">
              {getFilteredProducts().map((product) => (
                <div key={product.id} className="row col-sm-4 mb-4">
                  <Link style={{textDecoration: "none"}} to={`/product/${product.id}`}>
                    <div className="card mb-3 border-0" style={{width: "18rem"}}>
                      <img src={product.image}  />
                      <div className="card-body">
                        <p className="product-item mb-0 d-flex justify-content-between">
                          {product.name}
                          <span className="d-flex justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                          </span>
                        </p>
                        <p className="mb-0"  style={{fontFamily: "Nunito Sans", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20px"}}>{product.description}</p>
                        <p className="product-item">${product.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </div>
  </>
 )
}

export default Catalog;