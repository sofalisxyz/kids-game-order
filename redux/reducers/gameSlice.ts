import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameState } from '../interface';
import { randomize } from '../../utils/randomize';

const initialState: IGameState = {
  loading: true,
  itemQuantity: 2,
  itemValues: 'A',
  sort: 'asc',
  theme: 1,
  iconsThemeCount: 3,
  items: [23, 45, 67, 53, 85, 54],
  isWin: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setItemQuantity(state, action) {
      state.itemQuantity = action.payload;
    },
    setItemValues(state, action) {
      state.itemValues = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    startGame(state) {
      state.theme = randomize(4);

      // theme don't have same amount of icons so we fix it this way
      state.theme == 1
        ? (state.iconsThemeCount = 4)
        : state.theme == 2
        ? (state.iconsThemeCount = 3)
        : state.theme == 3
        ? (state.iconsThemeCount = 5)
        : state.theme == 4
        ? (state.iconsThemeCount = 5)
        : (state.iconsThemeCount = 3);
    },
    gameLoaded(state) {
      state.loading = false;
    },
    addItemToBar(state, action) {
      // state.items.push();
    },
    winGame(state) {
      state.items.length == state.itemQuantity ? (state.isWin = true) : null;
    },
  },
});

export const {
  setItemQuantity,
  setItemValues,
  setSort,
  startGame,
  gameLoaded,
  addItemToBar,
  winGame,
} = gameSlice.actions;

export default gameSlice.reducer;
