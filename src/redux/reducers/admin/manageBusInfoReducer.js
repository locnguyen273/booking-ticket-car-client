import { createSlice } from "@reduxjs/toolkit";
import { ManageBusInfoServices } from "../../../services/admin/manageBusInfoServices";

const initialState = {
  listBusInfo: [],
};

const ManageBusInfoReducer = createSlice({
  name: 'ManageBusInfoReducer',
  initialState,
  reducers: {
    getListBusInfoReducer: (state, { type, payload }) => {
      state.listBusInfo = payload;
    }
  }
})

export const {
  getListBusInfoReducer,
} = ManageBusInfoReducer.actions;

export default ManageBusInfoReducer.reducer;

export const GetListBusInfoAction = () => async (dispatch) => {
  try {
    const result = await ManageBusInfoServices.GetAllBusInfo();
    dispatch(getListBusInfoReducer(result.data));
  } catch (err) {
    console.log(err);
  }
}
