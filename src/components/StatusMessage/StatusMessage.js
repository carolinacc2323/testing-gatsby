import React from 'react';

const StatusMessage = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data loaded!</p>}
    </div>
  );
};

export default StatusMessage;
