import React from 'react';
import Table from '../components/Table';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.root}>
    <Table
      columns={[
        { key: 'firstName', title: 'First Name' },
        { key: 'lastName', title: 'Last Name' },
      ]}
      items={[
        { id: 1, firstName: 'A', lastName: 'A' },
        { id: 1, firstName: 'B', lastName: 'B' },
        { id: 1, firstName: 'C', lastName: 'C' },
      ]}
    />
  </div>
);

export default App;
