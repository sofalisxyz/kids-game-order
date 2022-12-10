export interface IGameState {
  loading: boolean;
  itemQuantity: number;
  itemValues: string | number;
  sort: 'asc' | 'desc';
  theme: number;
  iconsThemeCount: number;
  items: [] | Items;
  isWin: boolean;
}

export type Item = number;

export type Items = Item[];
