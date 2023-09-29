import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    ordersIncart: 0,
  },

  reducers: {
    addAllOrders: (state, action) => {
      state.orders = action.payload;
    },
    updateOrdersInCart: (state, action) => {
      state.ordersIncart = action.payload;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, id, status } = action.payload;

      const orderResult = state.orders.orders.find(
        (order) => order.orderId === orderId
      );

      if (orderResult) {
        const orderDetails = orderResult.orderDetails.find(
          (detail) => detail.id === id
        );

        if (orderDetails) {
          orderDetails.status = status;
        }
      }
    },

    updateOrderDetails: (state, action) => {
      const { orderId, id, updatedDetails } = action.payload;

      const orderResult = state.orders.orders.find(
        (order) => order.orderId === orderId
      );

      if (orderResult) {
        const orderDetails = orderResult.orderDetails.find(
          (detail) => detail.id === id
        );

        if (orderDetails) {
          orderDetails.price = updatedDetails.price;
          orderDetails.quantity = updatedDetails.quantity;
          orderDetails.total = updatedDetails.quantity * updatedDetails.price;
        }
      }
    },
  },
});
export const {
  addAllOrders,
  updateOrderStatus,
  updateOrdersInCart,
  updateOrderDetails,
} = orderSlice.actions;
export default orderSlice.reducer;
