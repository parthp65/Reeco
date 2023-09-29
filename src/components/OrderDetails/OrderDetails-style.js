import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Section = styled.div`
  box-shadow: 0 3px 2px #e2e8ff;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const OrderWrapper = styled.div`
  margin: 1rem 0;
`;

const OrderText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h4 {
    margin: 0;
  }
`;

const OrderInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const OrderLeftWrapper = styled.div`
  h2 {
    margin: 0;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SupplierSection = styled.div`
  margin: 3rem 0;
`;

const SupplierWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  box-shadow: 0 1px 1px #dce3ff;
  padding: 1rem;
  border: 1px solid #c1c1c1;
`;

const SupplierInfo = styled.div`
  border-right: 1px solid silver;
  padding: 1rem;
  width: 300px;
  h2 {
    font-size: 16px;
    margin: 0;
    color: gray;
  }
  p {
    margin: 1rem 0;
    font-size: 18px;
    font-weight: bold;
  }
  &.last {
    border-right: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const TableSection = styled.div`
  border-radius: 8px;
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: 0 1px 1px #dce3ff;
  padding: 1rem;
  border: 1px solid #c1c1c1;
`;

const FieldsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-radius: 1rem;
  width: 100%;
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th,
  td {
    padding: 1em;
    border-bottom: 2px solid #5b5b5b;
  }
  tbody td {
    color: #5b5b5b;
  }
`;
const OutlinedButton = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 50px;
  outline: none;
  border: 2px solid #1e633f;
  color: green;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
`;
const ContainedButton = styled.button`
  background-color: #1e633f;
  padding: 0.6rem 2rem;
  border-radius: 50px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`;
const Form = styled.form`
  width: 100%;
`;
const SearchWrapper = styled.div`
  padding: 0 1rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 50%;
  border-radius: 50px;
  border: 1px solid grey;
`;
const Input = styled.input`
  border-radius: 50px;
  outline: none;
  border: none;
  font-family: var(--font-primary);
  width: 100%;
  padding: 0.8rem;
`;
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 15%;
`;

const TableWrapper = styled.div`
  margin-top: 3rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 280px;
`;

const Quantity = styled.span`
  font-weight: bold;
`;
const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Status = styled.span`
  background-color: ${(props) =>
    props.status === "Missing-Urgent"
      ? "#de362b"
      : props.status === "Missing"
      ? "#f66d44"
      : "#3dca72"};
  color: #ffffff;
  border-radius: 50px;
  padding: 0.6rem;
  font-size: 12px;
`;
const ActionWrapper = styled.span`
  cursor: pointer;
`;
const Text = styled.span`
  cursor: pointer;
`;
export {
  Section,
  ActionWrapper,
  Text,
  Wrapper,
  StatusWrapper,
  Status,
  Quantity,
  OrderWrapper,
  OrderText,
  OrderInfoSection,
  OrderLeftWrapper,
  BtnWrapper,
  SupplierSection,
  SupplierWrapper,
  SupplierInfo,
  IconWrapper,
  TableSection,
  FieldsWrapper,
  Table,
  SpinnerWrapper,
  ProductWrapper,
  OutlinedButton,
  ContainedButton,
  Input,
  SearchWrapper,
  Form,
  ItemsWrapper,
  TableWrapper,
};
