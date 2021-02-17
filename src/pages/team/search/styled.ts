import styled from 'styled-components';
import { Select } from 'antd';

const Container = styled(Select)`
  margin-bottom: 10px;

  .ant-select-selection-item {
    display: none;
  }
`;

export default Container;
