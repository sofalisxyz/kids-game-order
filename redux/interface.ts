export interface IGameState {
  loading: boolean;
  itemQuantity: number;
  itemValues: string;
  sort: 'asc' | 'desc';
  theme: number;
  iconsThemeCount: number;
  items: [] | IItem[];
  isWin: boolean;
}

export interface IItem {
  readonly id: number;
  readonly value: number | string;
  readonly iconStyle: number;
  isRevealed: boolean;
}
