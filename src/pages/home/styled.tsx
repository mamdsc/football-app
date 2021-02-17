import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;

  .column {
    margin-left: 10px;
    width: 35%;

    @media (max-width: 600px) {
      margin-left: 0;
      width: 100% !important;
    }
  }
`;

export const ContainerTable = styled.div`
  width: 40%;
  border-radius: 10px;
  background-color: #fff;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
  .ant-table-body {
    overflow-y: auto !important;
  }

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-bottom: 1px solid #362121;
    margin: 0 30px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  color: #552c8a;
`;
