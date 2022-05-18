import React, { useEffect, useState } from "react";
import "./toyDetails.scss";

export default function Details() {
  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-image">
          <img src="https://yt3.ggpht.com/ytc/AKedOLSoDONs0ZJI2OUsZBVFV1gwgHvKNl-AlzwcfY9h1w=s900-c-k-c0x00ffffff-no-rj"></img>
        </div>
        <div className="item-text">
          <div className="overview">
            <h3>item name</h3>
            <span>item free</span>
          </div>
          <p>
            item description item descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem descriptionitem descriptionitem descriptionitem
            descriptionitem description
          </p>
          <p>item condition</p>
        </div>
        <div className="toy-btn-container">
          <button className="btn trade-btn">Trade</button>
          <button className="btn btn-outline">Go back to Listings</button>
        </div>
      </div>
    </div>
  );
}
