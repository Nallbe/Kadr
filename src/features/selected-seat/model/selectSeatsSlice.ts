import { 
  createSlice, 
  type PayloadAction } from "@reduxjs/toolkit";

type SelectedSeatsState = {
  selectedSeatIds: number[];
};

const initialState: SelectedSeatsState = {
  selectedSeatIds: [],
};

const selectedSeatIdsSlice = createSlice({
  name: "selectedSeatId",
  initialState,
  reducers: {
    toggleActiveSeats(
      state, 
      action: PayloadAction<number>
    ) {
      const seatId = action.payload;
      
      const isSelected = state.selectedSeatIds.includes(seatId);

      if (isSelected) {
        state.selectedSeatIds = state.selectedSeatIds.filter(
          (id) => id !== seatId,
        );
      } else {
        state.selectedSeatIds.push(seatId);
      }
    },
    clearSelectedSeats(state) {
      state.selectedSeatIds = [];
    },

  },
});

export const { 
  toggleActiveSeats, 
  clearSelectedSeats 
  } = selectedSeatIdsSlice.actions;

export const selectedSeatReducer = selectedSeatIdsSlice.reducer;
