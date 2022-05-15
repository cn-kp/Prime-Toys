import React from "react";
// import "./categoryOptions.scss";

export default function CategoryOptions(data) {

  return (
        <option data-value={data.key} value={data.id}>{data.category}</option>
  );
}
