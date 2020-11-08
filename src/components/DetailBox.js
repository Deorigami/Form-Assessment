import React, { useContext, useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components/macro";
import { GlobalContext } from "../Globalcontext";
import { Payment } from "../data/Data";
import ProductForm from "./ProductForm";
import TextArea from "antd/lib/input/TextArea";

function DetailBox() {
  const { Option } = Select;
  const [data] = useContext(GlobalContext);
  const [formValue, setFormValue] = useState(false);
  const [formData, setFormData] = useState({});

  console.log(useContext(GlobalContext), formData);

  const changeName = (e) => {
    if (e === "") {
      setFormValue(false);
    } else {
      setFormValue(true);
      setFormData({ ...formData, name: e });
    }
  };

  const changeDC = (e) => {
    setFormData({ ...formData, dc: e });
  };

  return (
    <Container>
      <div className="info">Detail</div>

      <div className="formUser">
        <label htmlFor="">Name</label>
        <br />
        <Select
          defaultValue="Name"
          style={{ width: 120 }}
          onChange={changeName}
        >
          {data.map((data, i) => (
            <Option key={i} value={data.employee_name}>
              {data.employee_name}
            </Option>
          ))}
        </Select>
        <br />
        <br />

        <label htmlFor="">Distribution Center</label>
        <br />
        <Select
          defaultValue={formValue ? null : "No data available."}
          disabled={formValue ? false : true}
          onChange={changeDC}
        >
          <Option key={1} value="DC Tangerang">
            DC Tangerang
          </Option>
          <Option key={2} value="DC Cikarang">
            DC Cikarang
          </Option>
        </Select>
      </div>

      {formData.name && formData.dc && (
        <div className="paymentBox">
          <Select defaultValue="" style={{ width: "150px" }}>
            {Payment.map((data, i) => (
              <Option key={i}>{data}</Option>
            ))}
          </Select>

          <DatePicker />

          <TextArea />
        </div>
      )}

      <ProductForm formData={formData} setFormData={setFormData} />
    </Container>
  );
}

export default DetailBox;

const Container = styled.div`
  width: 100%;
  display: flex;

  .info {
    width: 30%;
  }

  .formUser {
    width: 70%;
  }
`;
