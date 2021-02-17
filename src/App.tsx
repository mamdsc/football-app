import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/index';
import Routes from './routes';
import { TeamProvider } from './hooks/useTeam';

const App: React.FC = () => (
  <BrowserRouter>
    <TeamProvider>
      <Layout>
        <Routes />
      </Layout>
    </TeamProvider>
  </BrowserRouter>
);

export default App;
