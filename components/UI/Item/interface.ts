export interface IItemWrapperProps {
  theme: number;
  iconStyle: number;
}

export interface IItemProps extends IItemWrapperProps {
  value: number | string;
}
