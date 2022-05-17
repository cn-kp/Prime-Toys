import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { QUERY_CONDITIONS } from '../../utils/queries';
import { conditionActions } from '../../slices/condition';

import './conditionMenu.scss';

export default function ConditionMenu() {
  const dispatch = useDispatch;
  const state = useSelector((state) => state.condition.conditions);
  const { loading, data: conditionData } = useQuery(QUERY_CONDITIONS);

  const handleDispatch = () => {};

  dispatch(conditionActions.getAll());

  // useEffect(() => {
  //   dispatch(conditionActions.getAll());
  // });

  const conditionPromise = () => {
    return new Promise((resolve) => {
      if (conditionData) {
        const newArr = conditionData.conditions.map((condition) => ({
          name: condition.name,
        }));

        resolve(newArr);
      }
    });
  };

  const conditionNames = async () => {
    return await conditionPromise();
  };

  const data = conditionNames();

  return (
    <div className="test">
      <button onClick={handleDispatch}>Test</button>
      <h1>Conditions: </h1>

      {/* <h2>{state.map((condition) => condition.name)}</h2> */}
    </div>
  );
}
