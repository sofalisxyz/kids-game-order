import React from 'react';
import Range from '../UI/Range';

const ValuesRange = () => {
  const valuesOptions = ['А', 9, 19, 50, 99, 999];

  return <Range title='Значения' options={valuesOptions} bottomSpace='73' />;
};

export default ValuesRange;
