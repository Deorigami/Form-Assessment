import { Input } from "@material-ui/core";
import { Select } from "antd";
import React, { Fragment, useState } from "react";
import styled from "styled-components/macro";
import { Product } from "../data/Data";

function ProductForm({ formData, setFormData }) {
  const [productId, setProductId] = useState();
  const { Option } = Select;

  const onChange = (e) => {
    setProductId(Product.find((prod) => prod.name === e));

    setFormData({
      ...formData,
      productName: e,
      productPrice: 0,
      productUnit: "",
    });
  };

  const changeProduct = (e) => {
    setFormData({
      ...formData,
      productUnit: e,
      productPrice: productId.unit.find((unit) => unit.name === e).price,
    });
  };

  return (
    <Container>
      <div className="product">
        <Select
          placeholder="Product Name"
          style={{ width: "200px" }}
          onChange={onChange}
        >
          {Product.map((data, i) => (
            <Option key={i} value={data.name}>
              {data.name}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Unit"
          style={{ width: "200px" }}
          onChange={changeProduct}
        >
          {productId !== undefined && (
            <Fragment>
              {productId.unit.map((prod, index) => (
                <Option key={index} value={prod.name}>
                  {prod.name}
                </Option>
              ))}
            </Fragment>
          )}
        </Select>

        <Input disabled placeholder={JSON.stringify(formData.productPrice)} />
      </div>
      <div className="quantity"></div>
      <div className="total"></div>
    </Container>
  );
}

export default ProductForm;

const Container = styled.div``;
