import React, { useState } from 'react';
import Table from '../components/Table';
import CellData from '../components/CellData';
import styles from './App.module.scss';

export const App = () => {
  const [cellData, setCellData] = useState(null);

  return (
    <div className={styles.root}>
      <Table
        columns={[
          { key: 'firstName', title: 'First Name' },
          { key: 'lastName', title: 'Last Name' },
        ]}
        items={[
          { id: 1, firstName: 'A', lastName: 'A' },
          { id: 2, firstName: 'B', lastName: 'B' },
          { id: 3, firstName: 'C', lastName: 'C' },
        ]}
        onCellClick={setCellData}
      />
      <CellData data={cellData} className={styles.cellData} />
    </div>
  );
};

export default App;
