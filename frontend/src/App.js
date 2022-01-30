import data from './Data';

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div><a className="brand" href="/">Amazona</a> </div>
                <div>
                    <a href="/card">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
            <div>

               <div className="row center" >
                 {
                   data.products.map(product =>(
                    <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt={product.name}></img>
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fas fa-star" ></i></span>
                            <span><i className="fas fa-star" ></i></span>
                            <span><i className="fas fa-star-half-alt" ></i></span>
                            <span><i className="far fa-star" ></i></span>
                            <span><i className="far fa-star" ></i></span>
                        </div>
                        <div className="price">${product.price}</div>
                    </div>
                </div>
                   ))
                 }
                  
               </div>

            </div>
            </main>
            <footer className="row center" >All Right Reserved</footer>

        </div>
  );
}

export default App;
