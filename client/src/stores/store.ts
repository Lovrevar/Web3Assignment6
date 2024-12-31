import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./userStateSlice";
import pendingGamesReducer from "./queuedGamesSlice";
import ongoingGamesReducer from "./activeGamesSlice";

export const AppStore = configureStore({
  reducer: {
    player: playerReducer,
    pendingGames: pendingGamesReducer,
    ongoingGames: ongoingGamesReducer,
  },
});

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
