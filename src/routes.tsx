import { Routes as Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./components/Layout";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Products />} />
      </Route>
    </Switch>
  );
};

export default Routes;
