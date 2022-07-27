import React from 'react';
import './Pagination.css';

function Pagination(props) {
  const {page, setPage, maximumPages} = props;
  
  const cantGoPrevious = page === 1;
  const cantGoNext = page === maximumPages;

  const goPrevious = () => {
    setPage(page - 1);
  }
  const goNext = () => {
    setPage(page + 1);
  }

  return (
    <div className="pagination-wrapper">
      <button 
        className="pagination-button"
        onClick={goPrevious}
        disabled={cantGoPrevious}
      >
        {"<"}
      </button>
      <p>{page}</p>
      <button
        className="pagination-button"
        onClick={goNext}
        disabled={cantGoNext}
      >
        {">"}
      </button>
    </div>
  )
}

export default Pagination;