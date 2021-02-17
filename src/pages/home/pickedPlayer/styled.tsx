import styled from 'styled-components';

export const Container = styled.div`
  background-color: blue;
  border-radius: 20px;
  background-color: #673089;
  background-image: linear-gradient(to top, #7f3485, #b93e7c);
  margin-top: 10px;
  display: flex;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 20px;

    @media (max-width: 600px) {
      padding: 10px;
    }
  }

  > div:last-child {
    border-left: 1px solid #333;
  }
`;

export const AvatarCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-style: dashed;
  border-width: 3px;
  border-color: #673089;
  margin-top: 20px;
  font-size: 12px;

  > strong {
    width: 70px;
    text-align: center;
  }
`;
