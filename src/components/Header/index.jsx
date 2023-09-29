import { CaretDown, ShoppingCart } from "phosphor-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../../utils/constants";
import {
  Container,
  CountWrapper,
  HeaderWrapper,
  IconWrapper,
  SubWrapper,
  Text,
  Wrapper,
} from "./Head-style";

const Header = () => {
  const cartItems = useSelector((state) => state.order.ordersIncart);
  const location = useLocation();
  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Link to="/">
            <img src={LOGO} width={90} height={25} alt="reeco" />
          </Link>
          <Link to="/store">Stores</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/analytics">Analytics</Link>
        </Wrapper>
        <Wrapper>
          {location.pathname.includes("orderDetails") && (
            <IconWrapper>
              <CountWrapper>{cartItems}</CountWrapper>
              <ShoppingCart size={20} color="#ffffff" />
            </IconWrapper>
          )}
          <SubWrapper>
            <Text>Hello James</Text>
            <CaretDown size={18} color="#ffffff" />
          </SubWrapper>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
