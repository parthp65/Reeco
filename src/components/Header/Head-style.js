import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #1e633f;
  padding: 1rem 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  color: white;
`;

const IconWrapper = styled.div`
  position: relative;
`;
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CountWrapper = styled.span`
  position: absolute;
  top: -30%;
  background: #3dca72;
  border-radius: 50px;
  font-size: 12px;
  right: -70%;
  padding: 0.1rem;
  color: #ffffff;
  width: 18px;
  height: 18px;
  display: grid;
  place-content: center;
`;
export {
  CountWrapper,
  Container,
  IconWrapper,
  SubWrapper,
  Wrapper,
  HeaderWrapper,
  Text,
};
