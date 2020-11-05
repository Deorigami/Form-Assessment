import React, { useEffect, useState, createContext } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 429) {
            throw Error(res.statusText);
          } else {
            throw Error(res.statusText);
          }
        })
        .then((data) => setApiData(data.data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  useEffect(() => {
    let x = apiData.map((data) => {
      return {
        value: data.employee_name,
        label: data.employee_name,
      };
    });

    setOptions(x);
    console.log(x);
  }, [apiData]);

  return (
    <GlobalContext.Provider value={[apiData, options]}>
      {children}
    </GlobalContext.Provider>
  );
};
