import { configureStore } from "@reduxjs/toolkit";

import { selectedSeatIdReducer } from "@/src/features/selected-seat";

export const store = configureStore({
  reducer: {
    selectedSeats: selectedSeatIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;