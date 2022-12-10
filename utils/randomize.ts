type ElemNumber = number;
type ElemString = string;

export const randomize = (number: ElemNumber) => {
  return Math.ceil(Math.random() * number);
};

export const randomizeMinMax = (min: ElemNumber, max: ElemNumber) => {
  return min + Math.ceil(Math.random() * max);
};

export const getArrWithRandomLetters = (str: ElemString, length: number) => {
  const result: ElemString[] = [];

  while (result.length < length + 1) {
    const letter = str.charAt(Math.floor(Math.random() * str.length))
    if (!result.includes(letter)) {
      result.push(letter);
    }
  }

  return result;
};


export const getArrWithRandomValues = (min: ElemNumber, max: ElemNumber, length: number) => {
  const result: ElemNumber[] = [];

  while (result.length < length + 1) {
    const num = randomizeMinMax(min, max);
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}