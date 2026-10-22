import { 
  createSlice, 
  type PayloadAction } from "@reduxjs/toolkit";

type SelectedSeatsState = {
  selectedSeatIds: number[];
  sessionId: number | null;
};

const initialState: SelectedSeatsState = {
  selectedSeatIds: [],
  sessionId: null,
};

const selectedSeatIdsSlice = createSlice({
  name: "selectedSeatIds",
  initialState,
  reducers: {
    toggleActiveSeat(
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

    // Сохраняем текущий сеанс и очищаем выбранные места, если сеанс изменился, чтобы они не перемещались между сессиями
    setCurrentSession(
      state,
      action: PayloadAction<number>
    ) {
      const sessionId = action.payload;

      if (state.sessionId !== sessionId) {
        state.selectedSeatIds = [];
      }
      state.sessionId = sessionId;
    },

    clearSelectedSeats(state) {
      state.selectedSeatIds = [];
    },

  },
});

export const { 
  toggleActiveSeat, 
  clearSelectedSeats,
  setCurrentSession
  } = selectedSeatIdsSlice.actions;

export const selectedSeatReducer = selectedSeatIdsSlice.reducer;
