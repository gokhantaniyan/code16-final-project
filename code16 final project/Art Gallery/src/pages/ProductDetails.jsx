import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
 const {id} = useParams(); // alınan ürün ID'si
 const [product, setProduct] = useState(null) // secilen urun
 const [favorites, setFavorites] = useState(false)
 const [addBasket, setAddBasket] = useState(false)
 const [data, setData] =useState()

 const addToFavorites = () => {
    setFavorites(true)
 }

 const addToBasket = () => {
    setAddBasket(true)
 }


 useEffect(() => {
    fetch('/src/data/catalog.json')
    .then((response) => response.json())
    .then((data) => {
        setData(data)
        const selectedProduct = data.find((item) => item.id === parseInt(id))
        setProduct(selectedProduct)
    })
    .catch((error) => console.error('Veri çekme hatası:', error));
 }, [id]);

 if(!product){
    return <div>Loading...</div> // urun yuklenene kadar gosterilecek icerik
 }

 const getSimilarProducts = () => {
    if(!product){
        return[];
    }

    const similarProducts = data.filter(
        (p) => p.category === product.category && p.id  !== product.id
    )

    return similarProducts.slice(0, 3)
 }

 return (
  <>
    <div className="container mt-5">
        <button className="add-favorites" type="button" onClick={addToFavorites} disabled={favorites} style={{
            fontFamily: "Nunito Sans",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px"}}>
            {favorites ? "Added to favorites" : "Add to favorites" }
        </button>
        <div className="row mt-5">
            <div className="col-sm-6">
                <img className="detail-image" src={product.detailImage} />
            </div>
            <div className="col-sm-6">
                <h2 className="mb-4">{product.productName}</h2>
                <p className="details-item">Painting: {product.painting}</p>
                <p className="details-item"><span style={{fontWeight: "600"}}>Author:</span> {product.name}</p>
                <p className="details-item">{product.explanation}</p>
                <p className="details-item mt-4 mb-5">${product.price}</p>
                <button className="add-basket" type="button" onClick={addToBasket} disabled={addBasket}>
                    {addBasket ? "Added to Basket" : "Add to Basket"}
                </button>
            </div>
        </div>

        <div className="row mt-5">
            <h1 className="mb-5">Similar works</h1>
            {getSimilarProducts().map((similarProduct) => (
                <div className="col-sm-4 mb-4" key={similarProduct.id}>
                    <div className="card mb-3 border-0">
                      <img src={similarProduct.detailImage} alt={similarProduct.name}/>
                      <div className="card-body">
                        <p className="product-item mb-0 d-flex justify-content-between">
                          {similarProduct.name}
                          <span className="d-flex justify-content-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                          </span>
                        </p>
                        <p className="mb-0"  style={{fontFamily: "Nunito Sans", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20px"}}>{similarProduct.description}</p>
                        <p className="product-item">${similarProduct.price}</p>
                      </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </>
 )
}

export default ProductDetails;