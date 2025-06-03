import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Collapse, Spin, Alert } from 'antd';
import type { RootState } from '../../../core/redux/store/Store';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../core/components/pagination/Pagination';
import { fetchReposStart } from '../../../core/redux/reducers/repos/repoSlice';

const ITEMS_PER_PAGE = 5;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { users, loading, error, total } = useSelector((state: RootState) => state.users);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin size="large" tip="Loading users..." fullscreen />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        className="m-4"
      />
    );
  }

  const collapseItems = users.map((item, index) => ({
    key: String(index + 1),
    label: <div onClick={() => getRepositories(item.repos_url)} data-prop={item}>{item.login}</div>,
    children: <div>{item.repos_url}</div>,
  }));

  const handleIconClick = (event: any, panelHeader: any) => {
    event.preventDefault();
    const data = panelHeader.props?.["data-prop"]
    getRepositories(data.repos_url)
  };

  const getRepositories = async (query: string) => {
    let payload = {
      urlRepo: query,
    }
    dispatch(fetchReposStart(payload));
  }



  return (
    <>
      {users.length > 0 ? (
        <>
          <Collapse
            expandIconPosition={'end'}
            expandIcon={({ isActive, header }) => (
              <RightOutlined
                rotate={isActive ? 90 : 0}
                onClick={(e) => handleIconClick(e, header)}
              />
            )}
            items={collapseItems}
            accordion
          />
          <Pagination
            currentPage={currentPage}
            totalItems={total}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (<div></div>)
      }
    </>
  );
};

export default Home;