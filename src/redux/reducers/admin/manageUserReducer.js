import { createSlice } from "@reduxjs/toolkit";
import { ManageUserServices } from "../../../services/admin/manageUserServices";

const initialState = {
  listUser: [],
};

const ManageUserReducer = createSlice({
  name: "ManageUserReducer",
  initialState,
  reducers: {
    getListUserReducer: (state, { type, payload }) => {
      state.listUser = payload;
    },
  }
});

export const {
  getListUserReducer,
} = ManageUserReducer.actions;

export default ManageUserReducer.reducer;

export const GetListUserAction = () => async (dispatch) => {
  try {
    const result = await ManageUserServices.GetListUsers();
    dispatch(getListUserReducer(result.data));
  } catch (err) {
    console.log(err);
  }
}
