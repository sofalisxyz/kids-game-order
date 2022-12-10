import styled from '@emotion/styled';
import { convertCyrillic } from '../../../utils/convert-cyrillic';
import SectionWrapper from '../SectionWrapper';
import { IRangeProps } from './interface';

const Title = styled.div`
  font-size: 37px;
  font-weight: 700;
  color: #423f45;
  margin-bottom: 40px;
`;

const RangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 21px;
  background: #ffd748;
  border-radius: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
  top: -1px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;

    + label {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      font-weight: 700;
      font-size: 24px;
      color: #4f4b61;

      span {
        position: relative;
        top: -24px;
      }
    }
    &:checked {
      + label {
        background: #104987;
      }
    }
    &:hover {
      + label {
        background: #104987aa;
      }
    }
  }
`;

const Range: React.FC<IRangeProps> = ({ title, options, bottomSpace }) => {
  return (
    <SectionWrapper bottomSpace={bottomSpace}>
      <Title>{title}</Title>
      <RangeWrapper>
        {options.map((option, index) => {
          return (
            <InputWrapper key={index}>
              <input
                defaultChecked={index === 0}
                type='radio'
                id={convertCyrillic(title) + option.toString()}
                name={convertCyrillic(title)}
                value={option}
              />
              <label htmlFor={convertCyrillic(title) + option.toString()}>
                <span>{option}</span>
              </label>
            </InputWrapper>
          );
        })}
      </RangeWrapper>
    </SectionWrapper>
  );
};

export default Range;
