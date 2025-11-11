import React from 'react';
import './AccountSection.css';

const AccountSection = () => {
  return (
    <div className="account-section">
      <div className="account-header">
        <h3>내 계좌</h3>
        <button className="view-all">전체보기 →</button>
      </div>
      
      <div className="account-card">
        <div className="account-info">
          <div className="bank-logo">S</div>
          <div className="account-details">
            <p className="account-name">입출금 신한투자증권 증권거래구좌(S-ii...</p>
            <p className="account-number">신한 110-414-054943</p>
          </div>
          <button className="more-button">⋮</button>
        </div>
        
        <div className="balance">
          <h2>425,768원</h2>
        </div>
        
        <div className="account-actions">
          <button className="action-button">이체</button>
          <button className="action-button">급여클럽+</button>
        </div>
        
        <div className="linked-accounts">
          <div className="linked-account">
            <div className="account-icon green">🏦</div>
            <p className="account-title">이영재</p>
            <p className="account-amount">1,000,000</p>
          </div>
          <div className="linked-account">
            <div className="account-icon purple">K</div>
            <p className="account-title">이영재</p>
            <p className="account-amount">300,000</p>
          </div>
          <div className="linked-account">
            <div className="account-icon blue">🏦</div>
            <p className="account-title">이영재</p>
            <p className="account-amount">300,000</p>
          </div>
        </div>
      </div>
      
      <div className="utility-buttons">
        <div className="utility-button">
          <div className="utility-icon">🗑️</div>
          <p>검 반환</p>
        </div>
        <div className="utility-button">
          <div className="utility-icon">💡</div>
          <p>뱅크 사용팁</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;

