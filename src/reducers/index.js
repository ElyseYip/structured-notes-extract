import { configureStore } from "@reduxjs/toolkit";
import mockApiMiddleware from "../middleware/mock-api";
import notes from "./notes";

export default configureStore({
  reducer: {
    notes,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    mockApiMiddleware,
  ],
});
