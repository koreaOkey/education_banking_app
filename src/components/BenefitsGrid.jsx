import React, { useState } from 'react';
import './BenefitsGrid.css';

// 샘플 데이터 (더 많은 서비스 추가)
const allBenefitsData = [
  {
    id: 1,
    title: '추억의 갤러그 [장범진 본부장님]',
    url: 'https://chang-project.vercel.app/',
    thumbnail: '/images/thumbnails/gellage.png'
  },
  {
    id: 2,
    title: 'MBTI진단 테스트 [송민섭 부장님]',
    url: 'https://soms-project.vercel.app/',
    thumbnail: '/images/thumbnails/mbti-test.png'
  },
  {
    id: 3,
    title: '야바위 게임 [구성본 부장님]',
    url: 'https://yabawe.vercel.app/',
    thumbnail: '/images/thumbnails/yabawe.png'
  },
  {
    id: 4,
    title: '양궁 게임 [유광재 부장님]',
    url: 'https://ukj-project.vercel.app/',
    thumbnail: '/images/thumbnails/yangung.png'
  },
  {
    id: 5,
    title: '수도쿠 게임 [장선형 부장님]',
    url: 'https://csh-project-bdyr.vercel.app/',
    thumbnail: '/images/thumbnails/sudoko.png'
  },
  {
    id: 6,
    title: '가위바위보 게임 [강경원 부장님]',
    url: 'https://kwproject2.vercel.app/',
    thumbnail: '/images/thumbnails/gawibawibo.png'
  },
  {
    id: 7,
    title: '날씨별 음악 추천 서비스 [양승권 부장님]',
    url: 'https://ysk-project.vercel.app/',
    thumbnail: '/images/thumbnails/music-reco.png'
  },
  {
    id: 8,
    title: '추억의 테트리스 [이현구 부장님]',
    url: 'https://bunney9-tetrisproject.vercel.app/',
    thumbnail: '/images/thumbnails/tetris.png'
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

