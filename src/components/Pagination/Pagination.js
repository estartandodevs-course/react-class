import React from 'react';
import './Pagination.css';

function Pagination(props) {
  const {page, setPage, maximumPages} = props;
  
  const arrayPages = Array(maximumPages).fill(null).map((v, index) => index + 1);
  
  const cantGoPrevious = page === 1;
  const cantGoNext = page === maximumPages;

  const goPrevious = () => {
    setPage(page - 1);
  }
  const goNext = () => {
    setPage(page + 1);
  }
  
  const handlePageDirectChange = (pageNumber) => {
    setPage(pageNumber)
  }

  const getPageNumberClasses = (pageNumber) => {
    return `number-page ${pageNumber === page ? 'active' : ''}`;
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
      {arrayPages.map(pageNumber => (
        <span
          className={getPageNumberClasses(pageNumber)}
          onClick={() => handlePageDirectChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
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