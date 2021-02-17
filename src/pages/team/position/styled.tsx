import styled from 'styled-components';

interface ICirculePlayerProps {
  background: string;
}

const Container = styled.div`
  .formation {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    > h4 {
      margin-right: 10px;
    }
  }
`;

const FootballField = styled.div`
  width: 390px;
  height: 500px;
  background: linear-gradient(to top, #7f3485, #b93e7c);
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    width: 280px;
  }
`;

const CirculePlayer = styled.div<ICirculePlayerProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.background};
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  FootballField,
  CirculePlayer,
};
