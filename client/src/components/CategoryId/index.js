import React from 'react';
import './CategoryId.scss';

export default function CategoryOptions(data) {
  return <option value={data.id}>{data.category}</option>;
}
