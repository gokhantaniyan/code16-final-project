import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
 const {id} = useParams(); // alınan ürün ID'si
 const [product, setProduct] = useState(null) // secilen urun

 useEffect(() => {
    fetch('/src/data/catalog.json')
    .then((response) => response.json())
    .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id))
        setProduct(selectedProduct)
    })
    .catch((error) => console.error('Veri çekme hatası:', error));
 }, [id]);

 if(!product){
    return <div>Loading...</div> // urun yuklenene kadar gosterilecek icerik
 }
 return (
  <>
    <div className="container">
        <h1>Product Detail</h1>
        <div className="row">
            <div className="col-sm-6">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="col-sm-6">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
            </div>
        </div>
    </div>
  </>
 )
}

export default ProductDetails;