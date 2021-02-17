import styled from 'styled-components';

interface IProps {
  width: string;
  withMarginTop: boolean;
}

const Container = styled.button<IProps>`
  width: ${(props) => props.width};
  height: 40px;
  background-color: #673089;
  background-image: linear-gradient(to top, #7f3485, #b93e7c);
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  border: 0;
  border-radius: 6px;
  align-self: center;
  margin-top: ${(props) => (props.withMarginTop ? '20px' : 0)};
  outline: none;
  cursor: pointer;
`;

export default Container;
