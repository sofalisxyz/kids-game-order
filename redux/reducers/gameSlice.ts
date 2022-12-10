import { createSlice } from '@reduxjs/toolkit';
import { IGameState } from '../interface';
import { getArrWithRandomLetters, getArrWithRandomValues, randomize } from '../../utils/randomize';
import { rusAlphabet } from '../../constants/abc';

const initialState: IGameState = {
  loading: false,
  itemQuantity: 2,
  itemValues: 'A',
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


      for (let i = 0; i < action.payload.itemQuantity; i++) {
        action.payload.itemValues == "A"
          ? (state.items = getArrWithRandomLetters(rusAlphabet, action.payload.itemQuantity))
          : action.payload.itemValues == "9"
            ? (state.items = getArrWithRandomValues(1, 9, action.payload.itemQuantity))
            : action.payload.itemValues == "19"
              ? (state.items = getArrWithRandomValues(10, 19, action.payload.itemQuantity))
              : action.payload.itemValues == "50"
                ? (state.items = getArrWithRandomValues(20, 50, action.payload.itemQuantity))
                : action.payload.itemValues == "99"
                  ? (state.items = getArrWithRandomValues(50, 99, action.payload.itemQuantity))
                  : action.payload.itemValues == "999"
                    ? (state.items = getArrWithRandomValues(100, 999, action.payload.itemQuantity))
                    : (state.items = [] // todo optional: error boundary
                    );
      }
    },
    gameLoaded(state) {
      state.loading = false;
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
  winGame,
} = gameSlice.actions;

export default gameSlice.reducer;
