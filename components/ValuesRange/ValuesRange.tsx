import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setItemValues } from '../../redux/reducers/gameSlice';
import Range from '../UI/Range';

const ValuesRange = () => {
  const dispatch = useAppDispatch();
  const valuesOptions = ['А', 9, 19, 50, 99, 999];

  const handleItemValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemValues(e.target.value));
  };

  return (
    <Range
      title='Значения'
      options={valuesOptions}
      action={handleItemValues}
      bottomSpace='73'
    />
  );
};

export default ValuesRange;
