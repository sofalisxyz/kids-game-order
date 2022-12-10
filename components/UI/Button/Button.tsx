import styled from '@emotion/styled';

const Button = styled.button`
  background: ${(props) =>
    props.size == 'small' ? 'red' : props.size == 'large' ? 'blue' : 'grey'};
`;

export default Button;
