import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import Login from "../screens/login";
import Products from "../screens/product/products";
import DashboardTheme from "./theme/style-screens/DashboardTheme";
import NewProduct from "../screens/product/newProduct";
import Home from '../screens/home'
import appStorage from "../common/helpers/appStorage";
import ShowProduct from "../screens/product/showProduct";
import NotFound from "../components/NotFound"
import Purchases from "../screens/product/purchases";
import Notifications from "../screens/notifications";

const Storage = appStorage();

function App() {
  const loggedUser = Storage.getUser();
  if (loggedUser === null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <DashboardTheme>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/products/" element={<Products />} />
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/purchases/" element={<Purchases />} />
          <Route path="/notifications/" element={<Notifications />} />
        </Routes>
      </DashboardTheme>
    </Router>
  );
}

export default App;
