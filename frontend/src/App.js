import data from './Data';
import Product from './components/product'; 

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
                    <Product key={product._id} product={product} ></Product>
                   )) }
               </div>

            </div>
            </main>
            <footer className="row center" >All Right Reserved</footer>

        </div>
  );
}

export default App;
