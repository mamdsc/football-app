import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  color: #552c8a;
`;

export const Tops = styled.div`
  display: flex;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 5px 10px 10px 10px;

    ul {
      list-style: none;
      background-color: #e9e3e8;
      padding-inline-start: unset;
      border-radius: 8px;
      margin-bottom: 0px;

      > li {
        background-color: #fff;
        border-radius: 4px;
        margin: 5px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
      }
    }
  }
`;
