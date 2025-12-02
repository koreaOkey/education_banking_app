import React from 'react';
import './QuickMenu.css';

const QuickMenu = () => {
  return (
    <div className="quick-menu">
      <div className="quick-menu-tabs">
        <button className="tab-button active">SuperBank</button>
        <button className="tab-button">카드</button>
        <button className="tab-button">증권</button>
        <button className="tab-button">보험</button>
      </div>
      
      <div className="mate-section">
        <div className="mate-info">
          <div className="mate-icon">M</div>
          <span className="mate-text">신한 MyMate</span>
        </div>
        <button className="mate-button">자산관리라운지 →</button>
      </div>
    </div>
  );
};

export default QuickMenu;

