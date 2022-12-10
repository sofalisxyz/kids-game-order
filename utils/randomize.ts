import { IItem } from '../redux/interface';

export const randomize = (number: number) => {
  return Math.ceil(Math.random() * number);
};

export const randomizeMinMax = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomizeFromString = (str: string) => {
  return str.charAt(Math.floor(Math.random() * str.length));
};

export const shuffleArr = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getArrWithRandomLetters = (str: string, length: number) => {
  const result: string[] = [];

  while (result.length < length + 1) {
    const letter = randomizeFromString(str);
    if (!result.includes(letter)) {
      result.push(letter);
    }
  }

  return result;
};

const getArrWithRandomNumbers = (min: number, max: number, length: number) => {
  const result: number[] = [];

  while (result.length < length + 1) {
    const num = randomizeMinMax(min, max);
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

export const getItemsWithRandomLetters = (
  str: string,
  sort: 'asc' | 'desc',
  iconsThemeCount: number,
  length: number
) => {
  const items: IItem[] = [];
  const letters = getArrWithRandomLetters(str, length).sort(
    (a: string, b: string) =>
      sort === 'asc'
        ? a.localeCompare(b, 'ru', { ignorePunctuation: true })
        : b.localeCompare(a, 'ru', { ignorePunctuation: true })
  );
  let id = 1;

  while (items.length < length + 1) {
    const iconStyle = randomize(iconsThemeCount);

    const item = {
      id,
      value: letters[id - 1],
      iconStyle,
      isRevealed: id == 1 ? true : false,
    };

    letters.splice(letters.indexOf(item.value), 0);
    items.push(item);
    id++;
  }

  return items;
};

export const getItemsWithRandomNumbers = (
  min: number,
  max: number,
  sort: 'asc' | 'desc',
  iconsThemeCount: number,
  length: number
) => {
  const items: IItem[] = [];
  const numbers: number[] = getArrWithRandomNumbers(min, max, length).sort(
    (a: number, b: number) => (sort === 'asc' ? a - b : b - a)
  );
  let id = 1;

  while (items.length < length + 1) {
    const iconStyle = randomize(iconsThemeCount);

    const item = {
      id,
      value: numbers[id - 1],
      iconStyle,
      isRevealed: id == 1 ? true : false,
    };

    numbers.splice(numbers.indexOf(item.value), 0);
    items.push(item);
    id++;
  }

  return items;
};
