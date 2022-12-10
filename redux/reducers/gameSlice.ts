import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../interface';
import {
  getItemsWithRandomLetters,
  getItemsWithRandomNumbers,
  randomize,
} from '../../utils/randomize';
import { rusAlphabet } from '../../constants/abc';

const initialState: IGameState = {
  loading: false,
  itemQuantity: 2,
  itemValues: 'А',
  sort: 'asc',
  theme: 1,
  iconsThemeCount: 3,
  items: [],
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
    startGame(state, action) {
      state.loading = true;
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

      action.payload.itemValues == 'А'
        ? (state.items = getItemsWithRandomLetters(
            rusAlphabet,
            state.iconsThemeCount,
            action.payload.itemQuantity
          ))
        : action.payload.itemValues == '9'
        ? (state.items = getItemsWithRandomNumbers(
            1,
            9,
            state.iconsThemeCount,
            action.payload.itemQuantity
          ))
        : action.payload.itemValues == '19'
        ? (state.items = getItemsWithRandomNumbers(
            10,
            19,
            state.iconsThemeCount,
            action.payload.itemQuantity
          ))
        : action.payload.itemValues == '50'
        ? (state.items = getItemsWithRandomNumbers(
            20,
            50,
            state.iconsThemeCount,
            action.payload.itemQuantity
          ))
        : action.payload.itemValues == '99'
        ? (state.items = getItemsWithRandomNumbers(
            50,
            99,
            state.iconsThemeCount,
            action.payload.itemQuantity
          ))
        : action.payload.itemValues == '999'
        ? (state.items = getItemsWithRandomNumbers(
            100,
            999,
            state.iconsThemeCount,
            action.payload.itemQuantity
          ))
        : (state.items = []); // todo optional: error boundary
    },
    gameLoaded(state) {
      state.loading = false;
    },
    revealItem(state, action) {
      state.items[action.payload - 1].isRevealed = true;
    },
    winGame(state) {
      state.isWin = true;
    },
  },
});

export const {
  setItemQuantity,
  setItemValues,
  setSort,
  startGame,
  gameLoaded,
  revealItem,
  winGame,
} = gameSlice.actions;

export default gameSlice.reducer;
