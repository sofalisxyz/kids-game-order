import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IItem, IStatusBarProps } from './interface';

const background = (props: IStatusBarProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/status-bar.svg') center /
      contain no-repeat;
  `;

const Wrapper = styled.div`
  ${background};
  width: 100%;
  height: 100%;
  max-height: 231px;
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyItem = styled.div`
  width: 131px;
  height: 131px;
  margin: 0 2px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const FilledItemTest = styled(EmptyItem)`
  background: red;
`;

const StatusBar: React.FC<IStatusBarProps> = ({ theme }) => {
  const emptyItemIcon = (
    <svg
      width='132'
      height='132'
      viewBox='0 0 132 132'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_i_1_2587)'>
        <circle
          cx='65.5303'
          cy='66.1406'
          r='65.5'
          fill='black'
          fill-opacity='0.06'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_1_2587'
          x='0.0302734'
          y='0.640625'
          width='131'
          height='135'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='12.5' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1_2587'
          />
        </filter>
      </defs>
    </svg>
  );

  const [items, setItems] = React.useState<IItem[]>([]);

  const fillItems = () => {
    // todo: replace with dynamic value
    const itemQuantity = 5;
    const arr = [];
    for (let i = 0; i < itemQuantity; i++) {
      arr.push({ value: null });
    }
    setItems(arr);
  };

  React.useEffect(() => {
    fillItems();
  }, []);

  React.useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Wrapper theme={theme}>
      <FilledItemTest />
      {items &&
        items.map((item: IItem, index: number) => {
          return item.value == null ? (
            <EmptyItem key={index}>{emptyItemIcon}</EmptyItem>
          ) : (
            <FilledItemTest />
          );
        })}
    </Wrapper>
  );
};

export default StatusBar;
