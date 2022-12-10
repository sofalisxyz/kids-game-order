import styled from '@emotion/styled';
import { ISectionWrapperProps } from './interface';

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props: ISectionWrapperProps) => props.bottomSpace}px;
`;

export default SectionWrapper;
