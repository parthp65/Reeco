import { Spin } from "antd";
import { Check, Cookie, MagnifyingGlass, Printer, X } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { STATUS } from "../../utils/constants";
import { updateOrderStatus, updateOrdersInCart } from "../../utils/orderSlice";
import BaseLayout from "../Layout";
import UpdateMissingStatus from "../UpdateMissingStatus";
import UpdateOrderDetails from "../UpdateOrderDetails";
import {
  ActionWrapper,
  BtnWrapper,
  ContainedButton,
  FieldsWrapper,
  Form,
  IconWrapper,
  Input,
  ItemsWrapper,
  OrderInfoSection,
  OrderLeftWrapper,
  OrderText,
  OrderWrapper,
  OutlinedButton,
  ProductWrapper,
  Quantity,
  SearchWrapper,
  Section,
  SpinnerWrapper,
  Status,
  StatusWrapper,
  SupplierInfo,
  SupplierSection,
  SupplierWrapper,
  Table,
  TableSection,
  TableWrapper,
  Text,
  Wrapper,
} from "./OrderDetails-style";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [open, setOpen] = useState({
    missingStatus: false,
    updateDetails: false,
  });
  const dispatch = useDispatch();

  const [currentItem, setCurrentItem] = useState({});
  const allOrders = useSelector((state) => state.order.orders);
  const navigate = useNavigate();

  if (allOrders.length === 0) {
    return (
      <SpinnerWrapper>
        <Spin size="large" />
      </SpinnerWrapper>
    );
  }

  const currentOrderDetails = allOrders.orders?.filter(
    (item) => item.orderId === orderId
  );
  const orderDetails = currentOrderDetails[0];
  dispatch(updateOrdersInCart(orderDetails.orderDetails.length));

  const handleStatus = (orderId, id, status) => {
    dispatch(updateOrderStatus({ orderId: orderId, id: id, status: status }));
  };

  const handleModal = (item, currentModal) => {
    setCurrentItem(item);
    setOpen({
      ...open,
      [currentModal]: true,
    });
  };

  const handleCloseModal = (currentModal) => {
    setOpen({
      ...open,
      [currentModal]: false,
    });
  };

  const getColor = (status) => {
    switch (status) {
      case "Missing":
        return "#f66d44";
      case "Missing-Urgent":
        return "#de362b";
      default:
        return "#7d7d7d";
    }
  };
  const getWeight = (status) =>
    status === STATUS.MISSING || status === STATUS.MISSING_URGENT
      ? "bold"
      : "regular";

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <BaseLayout>
      <Section>
        <Wrapper>
          <OrderWrapper>
            <OrderText>
              <Link to="/">
                <h4>Orders</h4>
              </Link>
              <span>
                {">"} Order {orderDetails?.orderId}
              </span>
            </OrderText>
          </OrderWrapper>
          <OrderInfoSection>
            <OrderLeftWrapper className="orderLeftWrapper">
              <h2>Order {orderDetails?.orderId}</h2>
            </OrderLeftWrapper>
            <BtnWrapper>
              <OutlinedButton onClick={() => handleGoHome()}>
                Back
              </OutlinedButton>
              <ContainedButton>Approve order</ContainedButton>
            </BtnWrapper>
          </OrderInfoSection>
        </Wrapper>
      </Section>

      <SupplierSection>
        <SupplierWrapper>
          <SupplierInfo>
            <h2>Supplier</h2>
            <p>{orderDetails.supplier}</p>
          </SupplierInfo>
          <SupplierInfo>
            <h2>Shipping Date</h2>
            <p>{orderDetails.shippingDate}</p>
          </SupplierInfo>
          <SupplierInfo>
            <h2>Total</h2>
            <p>$ {orderDetails.total}</p>
          </SupplierInfo>
          <SupplierInfo>
            <h2>Category</h2>
            <IconWrapper>
              {orderDetails?.categories?.map((item, idx) => (
                <span key={idx}>
                  <Cookie size={20} color="#545454" />
                </span>
              ))}
            </IconWrapper>
          </SupplierInfo>
          <SupplierInfo>
            <h2>Department</h2>
            <p>{orderDetails.department}</p>
          </SupplierInfo>
          <SupplierInfo className="last">
            <h2>Status</h2>
            <p>{orderDetails.status}</p>
          </SupplierInfo>
        </SupplierWrapper>
      </SupplierSection>

      <TableSection>
        <FieldsWrapper>
          <Form>
            <SearchWrapper>
              <Input type="text" placeholder="Search your movies" />
              <MagnifyingGlass size={22} color="#729f89" weight="regular" />
            </SearchWrapper>
          </Form>
          <ItemsWrapper>
            <OutlinedButton>Add item</OutlinedButton>
            <span>
              <Printer size={28} color="#729f89" />
            </span>
          </ItemsWrapper>
        </FieldsWrapper>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Product name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.orderDetails.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <ProductWrapper>
                        <img
                          src={item.imgSrc}
                          alt={item.productName}
                          width={50}
                          height={50}
                        />
                        <Text>{item.productName}</Text>
                      </ProductWrapper>
                    </td>
                    <td>{item.brand}</td>
                    <td>${item.price} / 6*1LB</td>
                    <td>
                      <Quantity>{item.quantity}</Quantity> x 6*1LB
                    </td>
                    <td>{((item.quantity * item.price) / 6).toFixed(2)}</td>
                    <td>
                      <StatusWrapper>
                        {item.status && (
                          <Status status={item.status}>{item.status}</Status>
                        )}
                        <ActionWrapper
                          role="button"
                          onClick={() =>
                            handleStatus(orderId, item.id, STATUS.APPROVED)
                          }
                        >
                          <Check
                            size={20}
                            color={
                              item.status === STATUS.APPROVED
                                ? "#2e9d58"
                                : "#7a7a7a"
                            }
                            weight={
                              item.status === STATUS.APPROVED
                                ? "bold"
                                : "regular"
                            }
                          />
                        </ActionWrapper>
                        <ActionWrapper
                          role="button"
                          onClick={() => handleModal(item, "missingStatus")}
                        >
                          <X
                            size={20}
                            color={getColor(item.status)}
                            weight={getWeight(item.status)}
                          />
                        </ActionWrapper>
                        <ActionWrapper
                          role="button"
                          onClick={() => handleModal(item, "updateDetails")}
                        >
                          Edit
                        </ActionWrapper>
                      </StatusWrapper>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
      </TableSection>
      <UpdateMissingStatus
        item={currentItem}
        handleStatus={handleStatus}
        open={open.missingStatus}
        handleClose={() => handleCloseModal("missingStatus")}
        orderId={orderId}
      />
      <UpdateOrderDetails
        item={currentItem}
        handleStatus={handleStatus}
        open={open.updateDetails}
        handleClose={() => handleCloseModal("updateDetails")}
        orderId={orderId}
      />
    </BaseLayout>
  );
};

export default OrderDetails;
