import { Tag } from 'antd';
import styled from 'styled-components';

const FormContainer = styled.div`

  > form {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;

      > div {
        width: 50%;
        padding: 0 0 0 10px;

        > h4 {
          margin-top: 10px;
        }
      }
    }
  }
`;

const Container = styled.div`
  margin: 30px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 10px;
    margin: 10px;
  }

  .squad {
    display: flex;

    .search-players {
      margin-left: 20px;

      @media (max-width: 600px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }

    @media (max-width: 600px) {
      flex-wrap: wrap;
      flex-direction: column;
      margin-left: 20px;
    }

    > div {
      width: 50%;

      @media (max-width: 600px) {
        width: 90%;
      }
    }
  }

  .box {

    .btn-save {
      margin-bottom: 20px;

      @media (max-width: 600px) {
        margin-left: 20px;
      }
    }

    > h1 {
      color: #8d8d8d;
      text-align: center;
      margin-top: 20px;
    }
  }

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    border-bottom: 1px solid #f3f3f3;

    > h2 {
      margin-left: 30px;
      font-weight: 700px;
      color: #552c8a;
    }
  }
`;

const TagCustom = styled(Tag)`
  border-radius: 18px;
  background: #c41d7f;
  color: #fff;
  border: 0;

  .ant-tag-close-icon {
    color: #fff;
  }
`;

const Error = styled.span`
  color: #c50341;
  font-weight: 600;
`;

export {
  Container,
  FormContainer,
  Error,
  TagCustom,
};
