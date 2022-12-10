import styled, { StyledComponent } from '@emotion/styled';
import { IRangeProps } from './interface';

type FixMe = any;

const Wrapper: FixMe = styled.div``;

const Title = styled.div``;

const InputWrapper = styled.div``;

const Input = styled.input``;

const Range = ({ title, options }: IRangeProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      {options.map((option, index) => {
        return (
          <InputWrapper key={index}>
            <label htmlFor={option.toString()}>{option}</label>
            <Input
              defaultChecked={index === 0}
              type='radio'
              id={option.toString()}
              name={title}
              value={option}
            />
          </InputWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Range;
