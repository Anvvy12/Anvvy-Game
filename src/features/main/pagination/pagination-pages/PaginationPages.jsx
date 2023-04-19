import React from 'react';
import './pagination-pages.scss';

const PaginationPages = ({ currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  const handleClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= 3; i++) {
    {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? 'active pages-list__item' : 'pages-list__item'}
          onClick={() => handleClick(i)}
        >
          <span className="page-number">{i}</span>
        </li>,
      );
    }
  }

  return (
    <div className="pages-container">
      <ul className="pages-list">{pageNumbers}</ul>
    </div>
  );
};

export default PaginationPages;
