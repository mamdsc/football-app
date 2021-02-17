import React from 'react';
import { Table, Space, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FiAlertTriangle } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { Container, ContainerTable, Title } from './styled';
import { useTeams } from '../../hooks/useTeam';
import Button from '../../components/button';
import Top from './top';
import PickedPlayer from './pickedPlayer';

const { confirm } = Modal;

const Home: React.FC = () => {
  const { dataTeams, isLoading, deleteTeam } = useTeams();
  const history = useHistory();

  const handleEditTeam = (id: string) => {
    history.push(`/football-app/team/${id}`);
  };

  function showConfirmDelete(id: string) {
    confirm({
      title: 'Do you want to delete this team?',
      icon: <FiAlertTriangle />,
      onOk() {
        deleteTeam(id);
      },
    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: '',
      key: 'action',
      render: (value: any) => (
        <Space size="middle">
          <AiFillEdit cursor="pointer" onClick={() => handleEditTeam(value.id)} />
          <AiFillDelete cursor="pointer" onClick={() => showConfirmDelete(value.id)} />
        </Space>
      ),
    },
  ];

  return (
    <Container>
      <ContainerTable>
        <div>
          <Title>My teams</Title>
          <Button
            type="button"
            onClick={() => history.push('/football-app/team')}
            width="40px"
            withMarginTop={false}
          >
            <GoPlus size={16} />
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={dataTeams}
          pagination={false}
          scroll={{ y: 'calc(100vh - 300px)' }}
          loading={isLoading}
        />
      </ContainerTable>
      <div className="column">
        <Top />
        <PickedPlayer />
      </div>
    </Container>
  );
};

export default Home;
