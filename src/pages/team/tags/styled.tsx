import { Tag } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  height: 150px;
  border: 1px solid #f3f3f3;
  padding: 10px;
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

export {
  Container,
  TagCustom,
};
