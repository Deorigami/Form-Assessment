import React from "react";
import styled from "styled-components/macro";
import DetailBox from "./DetailBox";
import ProductBox from "./ProductBox";

function PaymentForm() {
  return (
    <Container>
      <DetailBox></DetailBox>
      <ProductBox></ProductBox>
    </Container>
  );
}

export default PaymentForm;

const Container = styled.form`
  width: 98%;
  padding: 0.8rem;
  display: flex;
  flex-direction: row;
`;
