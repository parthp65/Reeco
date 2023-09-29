import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Analytics from "./components/Analytics";
import Home from "./components/Home";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import Store from "./components/Store";
import useGetAllOrders from "./utils/getAllOrders";
import "./App.css";

function App() {
  useGetAllOrders();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
    {
      path: "/orderDetails/:orderId",
      element: <OrderDetails />,
    },
  ]);
  return (
    <div className="wrapper">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
