import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import CellData from '../components/CellData';
import { loadUsers } from './App.utils';
import styles from './App.module.scss';

export const App = () => {
  const [cellData, setCellData] = useState(null);
  const [usersRequest, setUsersRequest] = useState({
    items: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    loadUsers({ setUsersRequest });
  }, []);

  return (
    <div className={styles.root}>
      <Table
        {...usersRequest}
        columns={[
          { key: 'firstName', title: 'First Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' },
        ]}
        onCellClick={setCellData}
        onChange={({ sorter }) => {
          loadUsers({
            setUsersRequest,
            sortBy: sorter.column,
            sortOrder: sorter.order,
          });
        }}
      />
      <CellData data={cellData} className={styles.cellData} />
    </div>
  );
};

export default App;
