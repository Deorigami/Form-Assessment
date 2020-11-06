import React, { Fragment, useContext } from "react";
import { InputLabel, Select, FormControl, MenuItem } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../Globalcontext";

function DetailBox() {
  const [data, options] = useContext(GlobalContext);
  const [formValue, setFormValue] = useState(false);

  console.log(useContext(GlobalContext));

  const onChange = (e) => {
    // if (e.target.value === "") {
    //   setFormValue(false);
    // } else setFormValue(true);
    // console.log(e.target);
  };

  return (
    <Container>
      <div className="info">Detail</div>

      <div className="form">
        <br />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ width: "100px" }}
          >
            <MenuItem value={30}>Name</MenuItem>
          </Select>
        </FormControl>

        <br />

        <br />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ width: "100px" }}
          >
            <MenuItem value="">Name</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
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
    width: 70%;
  }
`;
