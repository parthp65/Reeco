import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { REASON_DATA, STATUS } from "../../utils/constants";
import { updateOrderDetails } from "../../utils/orderSlice";
import {
  ContainedButton,
  OutlinedButton,
} from "../OrderDetails/OrderDetails-style";
import styles from "./OrderDetails.module.css";
import {
  BtnWrapper,
  DetailsWrapper,
  ItemContainer,
  ItemContainerQuantity,
  PriceSection,
  QuantityContainer,
  Reason,
  ReasonSpan,
  ReasonWrapper,
  StaticBoxPhone,
  StaticBoxQuantity,
  Text,
  Total,
} from "./OrderDetails.style";

const UpdateOrderDetails = ({
  item,
  handleStatus,
  open,
  handleClose,
  orderId,
}) => {
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    setCurrentItem({
      ...item,
      total: (item.quantity * item.price) / 6,
    });
  }, [item]);

  const dispatch = useDispatch();
  const [reason, setReason] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentItem((prev) => {
      const newPrice = name === "price" ? value : prev.price;
      const newQuantity = name === "quantity" ? value : prev.quantity;

      if (!isNaN(newPrice) && !isNaN(newQuantity)) {
        return {
          ...prev,
          price: newPrice,
          quantity: newQuantity,
          total: (newQuantity * newPrice) / 6,
        };
      }

      return prev;
    });
  };

  const handleQuantity = (operation) => {
    if (operation === "add") {
      setCurrentItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity + 1,
        total: ((prevItem.quantity + 1) * prevItem.price) / 6,
      }));
    } else if (operation === "subtract" && currentItem.quantity > 0) {
      setCurrentItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity - 1,
        total: ((prevItem.quantity - 1) * prevItem.price) / 6,
      }));
    }
  };

  const handleReason = (id) => {
    const res = REASON_DATA.filter((item) => item.id === id);
    setReason(res[0]);
  };

  const handleUpdateDetails = () => {
    if (
      !(
        JSON.stringify(currentItem.quantity) === JSON.stringify(item.quantity)
      ) &&
      !(JSON.stringify(currentItem.price) === JSON.stringify(item.price))
    ) {
      handleStatus(orderId, item.id, STATUS.QUANTITY_AND_PRICE_UPDATED);
    } else if (
      !(JSON.stringify(currentItem.quantity) === JSON.stringify(item.quantity))
    ) {
      handleStatus(orderId, item.id, STATUS.QUANTITY_UPDATED);
    } else if (
      !(JSON.stringify(currentItem.price) === JSON.stringify(item.price))
    ) {
      handleStatus(orderId, item.id, STATUS.PRICE_UPDATED);
    }
    dispatch(
      updateOrderDetails({
        orderId: orderId,
        id: item.id,
        updatedDetails: currentItem,
      })
    );
    handleClose();
  };
  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      centered
      className={styles.orderDetailsWrapper}
      width={"55%"}
    >
      <h2 className="text">{item?.productName}</h2>

      <DetailsWrapper>
        <div>
          <img
            src={item?.imgSrc}
            alt={item?.productName}
            width={200}
            height={200}
          />
        </div>
        <PriceSection>
          <ItemContainer>
            <p>Price$</p>
            <p>
              <StaticBoxPhone
                type="number"
                name="price"
                value={currentItem?.price}
                onChange={(e) => handleChange(e)}
                className="saticBox phone"
              />
              <Text>/6*1LB</Text>
            </p>
          </ItemContainer>
          <ItemContainerQuantity>
            <p>Quantity</p>
            <QuantityContainer>
              <button onClick={() => handleQuantity("subtract")}>-</button>
              <StaticBoxQuantity
                type="number"
                name="quantity"
                value={currentItem?.quantity}
                onChange={(e) => handleChange(e)}
                className="saticBox quantity"
              />
              <button onClick={() => handleQuantity("add")}>+</button>
              <span>X /6*1LB</span>
            </QuantityContainer>
          </ItemContainerQuantity>
          <Total>
            <p>Total</p>
            <p>${currentItem?.total?.toFixed(2)}</p>
          </Total>
        </PriceSection>
      </DetailsWrapper>
      <ReasonWrapper>
        <h1>
          Choose reason <span>(optional)</span>
        </h1>
        <Reason className="reason">
          {REASON_DATA.map((item) => (
            <ReasonSpan
              key={item.id}
              onClick={() => handleReason(item.id)}
              className={reason.id === item.id ? "selectedBg" : "bg"}
              selected={reason.id === item.id}
            >
              {item.reason}
            </ReasonSpan>
          ))}
        </Reason>
      </ReasonWrapper>
      <BtnWrapper>
        <OutlinedButton onClick={() => handleClose()}>Cancel</OutlinedButton>
        <ContainedButton onClick={() => handleUpdateDetails()}>
          Send
        </ContainedButton>
      </BtnWrapper>
    </Modal>
  );
};

export default UpdateOrderDetails;
