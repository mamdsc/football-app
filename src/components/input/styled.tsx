import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

const Container = styled.div<IContainerProps>`

> h4 {
  margin-top: 10px
}

${(props) => props.isErrored && css`
      > h4 {
        color: #c50341;
      }
  `}

> div {
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #f3f3f3;
  padding: 5px;

  > input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #000;
    outline: none;
  }

  & + div {
    margin-top: 5px;
  }

  ${(props) => props.isErrored && css`
      border-color: #c50341;
    `}

  ${(props) => props.isFocused && css`
      color: #4169e1;
      border-color: #4169e1;
    `}

  ${(props) => props.isFilled && css`
      color: #4169e1;
    `}

  svg {
    margin-right: 16px;
  }
}
`;

export default Container;
