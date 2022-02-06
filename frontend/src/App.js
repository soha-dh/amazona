import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Amazona
          </a>{" "}
        </div>
        <div>
          <a href="/card">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <footer className="row center">All Right Reserved</footer>
    </div>
  );
}

export default App;
