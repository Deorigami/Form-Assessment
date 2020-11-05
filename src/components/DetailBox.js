import React, { Fragment, useContext } from "react";
import { InputLabel, Select, FormControl, MenuItem } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../Globalcontext";

function DetailBox() {
  const [data] = useContext(GlobalContext);
  const [formValue, setFormValue] = useState(false);

  console.log(useContext(GlobalContext));

  const onChange = (e) => {
    if (e.target.value === "") {
      setFormValue(false);
    } else setFormValue(true);
  };

  return (
    <Container>
      <div className="info">Detail</div>

      <div className="form">
        <label>Name</label>
        <br />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value="">Name</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <label>Distribution Center</label>
        <br />

        <select name="DC">
          {formValue ? (
            <Fragment>
              <option value="DC Tangerang">DC Tangerang</option>
              <option value="DC Cikarang">DC Cikarang</option>
            </Fragment>
          ) : (
            <option value="">No data available</option>
          )}
        </select>
      </div>
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

  .form {
  }
`;
