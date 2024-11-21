import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CreateContextProvider, { CartContext } from "./store/shopping-car-context.jsx";

 

function App() {

  return (
    <CreateContextProvider >
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CreateContextProvider>
  );
}

export default App;
