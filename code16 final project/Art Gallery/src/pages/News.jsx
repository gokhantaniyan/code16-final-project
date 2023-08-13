import { useState, useEffect } from "react";

function News(props) {
 const [products, setProducts] = useState([]);

  useEffect(() => {
    // "catalog.json" dosyasını fetch ile çekme işlemi
    fetch('/src/data/catalog.json')
      .then((response) => response.json())
      .then((data) => {
        // "description" içinde "2022" geçen ürünleri filtrele
        const filteredProducts = data.filter(product => product.description.includes("2022"));
        setProducts(filteredProducts);
      })
      .catch((error) => console.error('Veri çekme hatası:', error));
  }, []);
  return (
    <>
      <div className="container">
        <h1>News</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
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
    </>
  )
}

export default News;