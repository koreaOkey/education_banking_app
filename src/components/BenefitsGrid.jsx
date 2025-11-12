import React, { useState } from 'react';
import './BenefitsGrid.css';

// 샘플 데이터 (더 많은 서비스 추가)
const allBenefitsData = [
  {
    id: 1,
    title: '같은 카드 맞추기[게임]',
    url: 'http://localhost:3001',
    thumbnail: '/images/thumbnails/winter-match-thumbnail.png'
  },
  {
    id: 2,
    title: '여행 포인트 적립',
    url: 'https://example.com/travel-points',
    thumbnail: 'https://via.placeholder.com/200/4ECDC4/FFFFFF?text=Travel+Points'
  },
  {
    id: 3,
    title: '쇼핑 캐시백 이벤트',
    url: 'https://example.com/shopping-cashback',
    thumbnail: 'https://via.placeholder.com/200/45B7D1/FFFFFF?text=Shopping'
  },
  {
    id: 4,
    title: '주유 할인 혜택',
    url: 'https://example.com/gas-discount',
    thumbnail: 'https://via.placeholder.com/200/96CEB4/FFFFFF?text=Gas+Discount'
  },
  {
    id: 5,
    title: '영화 예매 할인',
    url: 'https://example.com/movie-discount',
    thumbnail: 'https://via.placeholder.com/200/FFEAA7/333333?text=Movie'
  },
  {
    id: 6,
    title: '음식 배달 쿠폰',
    url: 'https://example.com/food-delivery',
    thumbnail: 'https://via.placeholder.com/200/DFE6E9/333333?text=Food'
  },
  {
    id: 7,
    title: '커피 무료 쿠폰',
    url: 'https://example.com/coffee-coupon',
    thumbnail: 'https://via.placeholder.com/200/74B9FF/FFFFFF?text=Coffee'
  },
  {
    id: 8,
    title: '편의점 1+1 혜택',
    url: 'https://example.com/convenience-store',
    thumbnail: 'https://via.placeholder.com/200/A29BFE/FFFFFF?text=Store'
  }
];

const ITEMS_PER_PAGE = 4;

const BenefitsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(allBenefitsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBenefits = allBenefitsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="benefits-container">
      <div className="benefits-header">
        <h2>혜택</h2>
        <p>다양한 혜택을 확인하고 이용해보세요</p>
      </div>
      
      <div className="benefits-grid">
        {currentBenefits.map((benefit) => (
          <div 
            key={benefit.id} 
            className="benefit-card"
            onClick={() => handleCardClick(benefit.url)}
          >
            <div className="benefit-thumbnail">
              <img src={benefit.thumbnail} alt={benefit.title} />
            </div>
            <div className="benefit-title">
              {benefit.title}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ← 이전
          </button>
          <div className="pagination-info">
            <span className="current-page">{currentPage}</span>
            <span className="page-divider">/</span>
            <span className="total-pages">{totalPages}</span>
          </div>
          <button 
            className="pagination-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            다음 →
          </button>
        </div>
      )}
    </div>
  );
};

export default BenefitsGrid;

