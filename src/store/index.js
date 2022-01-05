import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/userReducer";
import articleReducer from "../reducers/articleReducer";

const store = configureStore({
  reducer: {
    mUser: userReducer.reducer,
    articles: articleReducer.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
