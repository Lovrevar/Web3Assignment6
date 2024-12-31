import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./AppStore";
import { IndexedYahtzeeSpecs } from "@/model/game";
import { deepClone } from "@/lib/utils";

interface PendingGamesState {
  gameList: IndexedYahtzeeSpecs[];
}

const initialState: PendingGamesState = {
  gameList: [],
};

const queuedGamesSlice = createSlice({
  name: "pendingGames",
  initialState,
  reducers: {
    updatePendingGame: (state, action: PayloadAction<IndexedYahtzeeSpecs>) => {
      const index = state.gameList.findIndex(
        (game) => game.id === action.payload.id
      );
      if (index > -1) {
        state.gameList[index] = deepClone(action.payload);
      }
    },

    upsertPendingGame: (state, action: PayloadAction<IndexedYahtzeeSpecs>) => {
      const index = state.gameList.findIndex(
        (game) => game.id === action.payload.id
      );
      if (index > -1) {
        state.gameList[index] = deepClone(action.payload);
      } else {
        state.gameList.push(deepClone(action.payload));
      }
    },

    removePendingGame: (state, action: PayloadAction<number>) => {
      state.gameList = state.gameList.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const {
  updatePendingGame,
  upsertPendingGame,
  removePendingGame,
} = queuedGamesSlice.actions;
export default queuedGamesSlice.reducer;

export const selectGameById = (state: RootState, id: number) =>
  state.pendingGames.gameList.find((game) => game.id === id);
