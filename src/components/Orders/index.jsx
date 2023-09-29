import React from "react";
import BaseLayout from "../Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heading, OrderWrapper, Wrapper } from "./Order-style";

const Orders = () => {
  const navigate = useNavigate();
  const allOrders = useSelector((state) => state.order.orders);

  const handleOrderDetails = (id) => {
    navigate(`/orderDetails/${id}`);
  };
  return (
    <BaseLayout>
      <Heading>All Orders</Heading>
      <Wrapper>
        {allOrders.orders?.map((item) => (
          <OrderWrapper
            key={item.orderId}
            onClick={() => handleOrderDetails(item.orderId)}
          >
            {item.orderId}
          </OrderWrapper>
        ))}
      </Wrapper>
    </BaseLayout>
  );
};

export default Orders;
