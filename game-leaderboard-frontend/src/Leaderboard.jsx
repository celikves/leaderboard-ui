import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './App.css';
import sampleData from './sampleData'; 

// const sampleData = [
//   { country: 'USA', username: 'Player1', rank: 1, money: 1000, dailyDiff: 5 },
//   { country: 'UK', username: 'Player2', rank: 2, money: 900, dailyDiff: -1 },
//   { country: 'Canada', username: 'Player3', rank: 3, money: 850, dailyDiff: 0 },
//   // Add more data as needed
// ];

const Leaderboard = () => {
  const [rowData] = useState(sampleData);

  const columnDefs = [
    { headerName: 'Country', field: 'country', flex: 1, minWidth: 70 },
    { headerName: 'Username', field: 'username', flex: 1, minWidth: 70 },
    { headerName: 'Rank', field: 'rank', flex: 1, minWidth: 70 },
    { headerName: 'Money', field: 'money', flex: 1, minWidth: 70 },
    {
      headerName: 'Daily Diff',
      field: 'dailyDiff',
      flex: 1,
      minWidth: 70,
      cellStyle: params => {
        if (params.value > 0) {
          return { color: 'green', fontWeight: 'bold' };
        } else if (params.value === 0) {
          return { color: 'yellow', fontWeight: 'bold' };
        } else {
          return { color: 'red', fontWeight: 'bold' };
        }
      },
    },
  ];

  const localeText = {
    //page: 'Custom Page',
    of: '-',
    to: '/',
    more: 'more',
    less: 'less',
    paginationPage: '',
    paginationOf: 'of',
    paginationTo: 'to',
    paginationFirstPage: 'First',
    paginationLastPage: 'Last',
    paginationNextPage: 'Next',
    paginationPreviousPage: 'Previous',
    paginationShowing: 'Showing',
    paginationBetween: 'between',
    paginationFooterRowCount: 'Total rows',
    rangeSeparator: 'to',
    loadingOoo: 'Loading...',
  };

  return (
    <div className="w-full p-4 bg-gray-950">
      <div
        className="ag-theme-alpine-dark"
        style={{ width: '100%', minWidth: '350px' }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
          }}
          domLayout="autoHeight"
          pagination={true}
          paginationPageSize={20}
          paginationAutoPageSize={false}
          paginationPageSizeOptions={[ 20, 50, 100 ]} 
          localeText={localeText}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
