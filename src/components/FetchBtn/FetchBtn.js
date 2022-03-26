import React from 'react';

const FetchBtn = ({ fetchApi }) => (
    <button type="button" onClick={() => fetchApi()}>
      FETCH API
    </button>
);

export default FetchBtn;