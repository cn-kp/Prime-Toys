import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useQuery } from '@apollo/client';
import { QUERY_CONDITIONS } from '../utils/queries';

// export const fetchConditions = createAsyncThunk(
//   'conditions/name',
//   async (_, thunkAPI) => {
//     try {
//       const { loading, data: conditionData } = useQuery(QUERY_CONDITIONS);

//       const response = () => {
//         return new Promise(() => {
//           if (conditionData) {
//             const newArr = conditionData.conditions.map((condition) => ({
//               name: condition.name,
//             }));

//             return newArr;
//           }
//         });
//       };

//       const data = response();

//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue({ err: err.message });
//     }
//   }
// );

const initialState = { conditions: [], loading: true, error: false };

export const conditionSlice = createSlice({
  name: 'conditions',
  initialState: initialState,
  reducers: {
    getAll(state) {
      state.loading = false;
    },
  },
});

export const conditionActions = conditionSlice.actions;
export default conditionSlice;
