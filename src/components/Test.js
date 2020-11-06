import React, { Fragment, useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../Globalcontext";
import Select from "react-select";
import AsyncSelect from "react-select/async";

export default function Test() {
  const [dataApi, option] = useContext(GlobalContext);
  const [options, setOptions] = useState([]);

  const data = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  console.log(useContext(GlobalContext), data);

  return (
    <div>
      {options ? (
        <Select
          className="basic-single"
          classNamePrefix="select"
          isDisabled={false}
          isClearable={true}
          isSearchable={true}
          name="color"
          options={options}
        />
      ) : (
        <Select id="test" />
      )}
      {console.log(option)}

      <AsyncSelect loadOptions={option}></AsyncSelect>
    </div>
  );
}
