import React from "react";
import "./CategoryId.scss";

export default function CategoryOptions(data) {

  return (
        <option data-value={data.key} value={data.id}>{data.category}</option>
  );
}
