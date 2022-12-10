import styled from '@emotion/styled';
import { IButtonProps } from './interface';

const Button = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  padding: 3px 21px 2px;
  background: #ffd748;
  border-radius: 20px;
  font-weight: 700;
  font-size: 32px;
  color: #423f45;
  opacity: ${(props: IButtonProps) => (props.isActive ? '1' : '0.56')};

  &:hover,
  &:active,
  &:focus {
    opacity: 1;
  }
`;

export default Button;
