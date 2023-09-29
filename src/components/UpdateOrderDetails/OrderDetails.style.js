import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceSection = styled.div`
  width: 350px;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 44% 1fr 0;
  align-items: center;
  margin-bottom: 1rem;
  p {
    margin: 0;
  }
`;
const Text = styled.span`
  margin-left: 1rem;
`;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
const ItemContainerQuantity = styled(ItemContainer)`
  display: grid;
  grid-template-columns: 25% 500px 1fr;
  gap: 1rem;
  align-items: center;
  button {
    color: white;
    background: #3dca72;
    border-radius: 50px;
    outline: none;
    border: none;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

const Total = styled.div`
  display: flex;
  gap: 8rem;
`;

const ReasonWrapper = styled.div`
  h1 {
    font-size: 1.125rem;
    margin: 0 0 0.625rem 0;
  }
  h1 span {
    font-size: 1.125rem;
    margin: 0 0 0.625rem 0;
    color: #bbbbbb;
  }
`;

const Reason = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  span {
    font-size: 0.75rem;
    border-radius: 50px;
    text-align: center;
    padding: 0.2rem 1rem;
    border: 1px solid #bbbbbb;
    cursor: pointer;
  }
`;

const ReasonSpan = styled.span`
  font-size: 0.75rem;
  border-radius: 50px;
  text-align: center;
  padding: 0.2rem 1rem;
  border: 1px solid #bbbbbb;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#3dca72" : "#ffffff")};
`;

const StaticBox = styled.input`
  border: 1px solid #bbbbbb;
  padding: 0.2rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  outline: none;
`;

const StaticBoxPhone = styled(StaticBox)`
  width: 98px;
`;

const StaticBoxQuantity = styled(StaticBox)`
  width: 98px;
`;

const PriceWrapper = styled.div`
  width: 150px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0 1rem 0;
  gap: 3rem;
`;

export {
  ItemContainerQuantity,
  ItemContainer,
  PriceSection,
  DetailsWrapper,
  BtnWrapper,
  StaticBoxQuantity,
  PriceWrapper,
  StaticBoxPhone,
  Total,
  Reason,
  ReasonWrapper,
  ReasonSpan,
  Text,
  QuantityContainer,
};
