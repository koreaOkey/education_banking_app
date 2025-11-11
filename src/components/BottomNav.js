import React from 'react';
import './BottomNav.css';

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: '홈', icon: '🏠' },
    { id: 'assets', label: '자산관리', icon: '📊' },
    { id: 'products', label: '상품', icon: '🛍️' },
    { id: 'benefits', label: '혜택', icon: '🎁' },
    { id: 'menu', label: '전체메뉴', icon: '☰' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;

