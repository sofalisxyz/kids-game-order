export interface IGameState {
  loading: boolean;
  itemQuantity: number;
  itemValues: string;
  sort: 'asc' | 'desc';
  theme: number;
  iconsThemeCount: number;
  items: [] | Items;
  isWin: boolean;
}

export interface IItem {
  id: number;
  value: number;
  iconStyle: number;
  isRevealed: boolean;
}

export type Items = IItem[];
