import React, { useState } from 'react';
import PaginationPages from '../pagination-pages/PaginationPages';
import './pagination-container.scss';

function PaginationSection() {
  const items = Array.from({ length: 15 }, (_, i) => i + 1);
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="pagination-section">
      <ul className="items-list">
        {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>

      <PaginationPages currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
}

export default PaginationSection;
