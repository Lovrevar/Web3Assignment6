import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  player: string | undefined;
}

const initialState: PlayerState = {
  player: undefined,
};

const userStateSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer(state, action: PayloadAction<string | undefined>) {
      state.player = action.payload;
    },
  },
});

export const { setPlayer } = userStateSlice.actions;

export default userStateSlice.reducer;
