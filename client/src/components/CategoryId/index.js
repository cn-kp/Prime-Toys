import React from 'react';
import './CategoryId.scss';

export default function CategoryData(data) {
  return <option value={data.id}>{data.category}</option>;
}
