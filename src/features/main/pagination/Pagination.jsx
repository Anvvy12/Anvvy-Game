import React, { useState } from 'react';
import './pagination.scss';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : null} onClick={() => handleClick(i)}>
          {i}
        </li>,
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul className="pagination">{renderPageNumbers()}</ul>
    </div>
  );
}

export default Pagination;
