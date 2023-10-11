import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Properties from "./pages/products/Property";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Owners from "./pages/owners/Owners";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="maniContainer"> </div>
          <Menu />
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/property",
        element: <Properties/>,
      },
      {
        path: "/owner",
        element: <Owners/>,
      },
    ]
  },
{
  path:"/Login",
  element: <Login/>

}
]);

  return <RouterProvider router={router} />;
}

export default App;
