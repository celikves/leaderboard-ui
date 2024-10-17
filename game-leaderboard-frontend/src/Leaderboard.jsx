import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import './App.css';

const Leaderboard = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:3005/players');
        const playersData = response.data.map((player) => ({
          country: player.country,
          username: player.name,
          rank: player.rank || 'N/A',
          money: player.totalEarnings || 0,
          dailyDiff: player.dailyDiff || 0 
        }));       
        setRowData(playersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching players:', error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

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
        {loading ? (
          <div className="flex items-center justify-center h-screen text-white text-2xl">
            Loading...
          </div>
        ) : (
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
            paginationPageSizeOptions={[20, 50, 100]} 
            localeText={localeText}
          />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
