import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllOrders } from "./orderSlice";

const useGetAllOrders = () => {
  const dispatch = useDispatch();

  const getALlOrders = async () => {
    const response = await fetch("http://localhost:3000/orderData.json");
    const orders = await response.json();
    dispatch(addAllOrders(orders));
  };
  useEffect(() => {
    getALlOrders();
  }, []);
};

export default useGetAllOrders;
