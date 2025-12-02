import React from 'react';
import './Banner.css';

const Banner = () => {
  const handleClick = () => {
    window.open('https://versed-notify-32d.notion.site/2ae62d8fbe868088a259c4a4f6d70c9c', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="banner" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="banner-content">
        <div className="banner-text">
          <p className="banner-subtitle">달콤할때마다 쌓이는 캐시</p>
          <h2 className="banner-title">부서장 AI 교육자료 링크 →</h2>
        </div>
        <div className="banner-icon">
          <div className="watch-icon">⌚</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

