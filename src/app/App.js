import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Login from "../screens/Login";
import Products from "../screens/product/Products";
import DashboardTheme from "./theme/style-screens/DashboardTheme";
import NewProduct from "../screens/product/NewProduct";
import Home from "../screens/Home/Home";
import useAuth from "../hooks/useAuth";
import appStorage from "../common/helpers/appStorage";
import NotFound from "../common/components/NotFound";
import ShowProduct from "../screens/product/ShowProduct";

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
          <Route path="/home" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<ShowProduct />} />
        </Routes>
      </DashboardTheme>
    </Router>
  );
}

export default App;
