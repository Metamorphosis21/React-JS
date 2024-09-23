import { useEffect, useState } from "react";
import "./Styles_04.css";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disButton , setDisbutton] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProduct(() => [...product,...result.products]);
      }
      console.log(result);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(product && product.length === 100)
      setDisbutton(true)
  }, [product]);

  if (loading && count === 0) {
    return <div>Loading data! Please wait a moment...</div>;
  }

  return (
    <section className="sec04">
      <div className="heading">Load More Buttons 04</div>
      <div className="container">
        <div className="prod-container">
          {product && product.length
            ? product.map((p) => (
                <div key={p.id} className="prod">
                  <img src={p.thumbnail} alt={p.title} />
                  <p>{p.title}</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="btn">
        <button disabled={disButton} onClick={() => setCount(count + 1)}>Load more</button>
         <p>Total products:{product.length}</p> 
      </div>
      {
        disButton ? <p>You have reached to 100 products</p> : null
      }
    </section>
  );
}

export default LoadMore;
