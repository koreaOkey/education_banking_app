import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <p className="banner-subtitle">달콤할때마다 쌓이는 캐시</p>
          <h2 className="banner-title">신한 20+ 뛰어요! →</h2>
        </div>
        <div className="banner-icon">
          <div className="watch-icon">⌚</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

