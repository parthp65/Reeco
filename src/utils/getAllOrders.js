import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllOrders } from "./orderSlice";
import { BASE_URL } from "./constants";

const useGetAllOrders = () => {
  const dispatch = useDispatch();

  const getALlOrders = async () => {
    const response = await fetch(BASE_URL);
    const orders = await response.json();
    dispatch(addAllOrders(orders));
  };
  useEffect(() => {
    getALlOrders();
  }, []);
};

export default useGetAllOrders;
