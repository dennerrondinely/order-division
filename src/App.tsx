import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ProductsProvider } from "./providers/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
