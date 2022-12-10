import { Items } from '../redux/interface';

export const randomize = (number: number) => {
  return Math.ceil(Math.random() * number);
};

export const randomizeMinMax = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffleArr = (arr: any) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const getArrWithRandomLetters = (str: string, length: number) => {};

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
  iconStyle: number,
  length: number
) => {
  const items: any = [];

  while (items.length < length + 1) {
    const letter = str.charAt(Math.floor(Math.random() * str.length));
    let id = 1;

    const item = {
      value: letter,
      id,
      iconStyle,
      isRevealed: false,
    };
    if (!items.includes(item.value)) {
      items.push(item);
      id++;
    }
  }

  return items;
};

export const getItemsWithRandomNumbers = (
  min: number,
  max: number,
  iconsThemeCount: number,
  length: number
) => {
  const items: any | [] = [];
  const numbers: number[] = getArrWithRandomNumbers(min, max, length).sort(
    (a: any, b: any) => a - b
  );
  let id = 1;

  while (items.length < length + 1) {
    const iconStyle = randomize(iconsThemeCount);

    const item = {
      id,
      value: numbers[id - 1],
      iconStyle,
      isRevealed: false,
    };

    numbers.splice(numbers.indexOf(item.value), 0);
    items.push(item);
    id++;
  }

  return items;
};
