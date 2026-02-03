import React from "react";

const Hadees = () => {
  const getData = () => {
    const apiUrl =
      "https://hadithapi.com/api/hadiths?apiKey=$2y$10$mKap64F65i7SeYP3DFHxqatykEDye9LwoeD0atli4ArUOEc8qu";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div></div>;
};

export default Hadees;
