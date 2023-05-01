import { createSlice } from "@reduxjs/toolkit";
import { ManageTicketServices } from "../../../services/admin/manageTicketServices";

const initialState = {
  listTicket: [],
  ticketDetail: [],
};

const ManageTicketReducer = createSlice({
  name: "ManageTicketReducer",
  initialState,
  reducers: {
    getListTicketReducer: (state, { type, payload }) => {
      state.listTicket = payload;
    },
    getOneTicketDetailReducer: (state, { type, payload }) => {
      state.ticketDetail = payload;
    },
  },
});

export const { getListTicketReducer, getOneTicketDetailReducer } =
  ManageTicketReducer.actions;

export default ManageTicketReducer.reducer;

export const GetListTicketAction = () => async (dispatch) => {
  try {
    const result = await ManageTicketServices.GetListTickets();
    dispatch(getListTicketReducer(result.data));
  } catch (err) {
    console.log(err);
  }
};

export const GetOneTicketDetailAction = (ticketId) => async (dispatch) => {
  try {
    const result = await ManageTicketServices.GetOneTicketById(ticketId);
    dispatch(getOneTicketDetailReducer(result.data));
  } catch (err) {
    console.log(err);
  }
};
