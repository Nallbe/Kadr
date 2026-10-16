import { configureStore } from "@reduxjs/toolkit";

import { selectedSeatReducer } from "@/src/features/selected-seat";

export const store = configureStore({
  reducer: {
    booking: selectedSeatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;