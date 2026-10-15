import { 
  createSlice, 
  type PayloadAction } from "@reduxjs/toolkit";

type SelectedSeatsState = {
  selectedSeatId: number[];
};

const initialState: SelectedSeatsState = {
  selectedSeatId: [],
};

const selectedSeatIdSlice = createSlice({
  name: "selectedSeatId",
  initialState,
  reducers: {
    toggleActiveSeats(
      state, 
      action: PayloadAction<number>
    ) {
      const seatId = action.payload;
      
      const isSelected = state.selectedSeatId.includes(seatId);

      if (isSelected) {
        state.selectedSeatId = state.selectedSeatId.filter(
          (id) => id !== seatId,
        );
      } else {
        state.selectedSeatId.push(seatId);
      }
    },
    clearSelectedSeats(state) {
      state.selectedSeatId = [];
    },

  },
});

export const { 
  toggleActiveSeats, 
  clearSelectedSeats 
  } = selectedSeatIdSlice.actions;

export default selectedSeatIdSlice.reducer;
