import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import CellData from '../components/CellData';
import { loadUsers } from './App.utils';
import styles from './App.module.scss';

const USERS_LIMIT = 5;

export const App = () => {
  const [cellData, setCellData] = useState(null);
  const [usersRequest, setUsersRequest] = useState({
    items: [],
    totalItems: 0,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    loadUsers({ setUsersRequest, limit: USERS_LIMIT });
  }, []);

  return (
    <div className={styles.root}>
      <Table
        {...usersRequest}
        limit={USERS_LIMIT}
        columns={[
          { key: 'firstName', title: 'First Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' },
        ]}
        onCellClick={setCellData}
        onChange={({ sorter, page }) => {
          loadUsers({
            setUsersRequest,
            page,
            limit: USERS_LIMIT,
            sortBy: sorter.column,
            sortOrder: sorter.order,
          });
          setCellData(null);
        }}
      />
      <CellData data={cellData} className={styles.cellData} />
    </div>
  );
};

export default App;
