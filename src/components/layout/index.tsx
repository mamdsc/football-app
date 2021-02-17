import React from 'react';
import { Layout, Avatar } from 'antd';
import Container from './styled';

const { Header, Footer, Content } = Layout;

const LayoutContainer: React.FC = ({ children }) => (
  <Container>
    <Header>
      <div>
        <h3>Squad Management Tool</h3>
      </div>
      <div>
        John Doe
        <Avatar alt="JD">JD</Avatar>
      </div>
    </Header>
    <Content>{children}</Content>
    <Footer>2021 - All rights reserved</Footer>
  </Container>
);

export default LayoutContainer;
