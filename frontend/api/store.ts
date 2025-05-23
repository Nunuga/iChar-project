import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { resumeApi } from "./resumeApi";

export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]: resumeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resumeApi.middleware),
  devTools: process.env.NODE_ENV == "development",
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
