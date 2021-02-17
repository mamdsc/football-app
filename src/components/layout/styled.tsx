import styled from 'styled-components';
import { Layout } from 'antd';

const Container = styled(Layout)`
  height: 100vh;

  .ant-layout-header {
    height: 50px;
    background-color: #8b206f;
    background-image: linear-gradient(to left, #901f6c, #c00e4f);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    color: #fff;
    font-size: 19px;

    @media (max-width: 600px) {
      padding: 0 20px;
    }

    .ant-menu {
      background: transparent;

      .ant-menu-submenu-title:hover {
        color: transparent;
      }
      .ant-menu-submenu-active {
        border: 0;
      }

      .ant-menu-submenu,
      .ant-menu-submenu-horizontal,
      .ant-menu-submenu-selected {
        border: 0;
      }

      .anticon {
        color: #fff;
      }
    }

    > div {
      display: flex;
      align-items: center;
      font-size: 15px;

      @media (max-width: 600px) {
        font-size: 10px;
      }

      > h3 {
        font-size: 15px;
        font-weight: unset;
        color: #fff;
      }

      .ant-avatar {
        margin-left: 5px;
        color: #333;
      }
    }
  }

  .ant-layout-content {
    background-color: #f7f3f7;
    overflow: auto;
  }

  .ant-layout-footer {
    height: 40px;
    background-color: #e9e3e9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
  }
`;

export default Container;
