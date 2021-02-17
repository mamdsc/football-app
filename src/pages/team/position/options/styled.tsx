import styled from 'styled-components';

const Attackers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 600px) {
   flex-wrap: wrap;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Defenders = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Goalkeeper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export {
  Attackers,
  Middle,
  Defenders,
  Goalkeeper,
};
