import React from 'react';
import './ServiceGrid.css';

const ServiceGrid = () => {
  const services = [
    { name: '땡겨요', icon: '🎨', color: '#ff6b35' },
    { name: '쏠지갑', icon: '💼', color: '#4ecdc4' },
    { name: '스토리뱅크', icon: '💬', color: '#95a3f6' },
    { name: '쏠야구', icon: '⚾', color: '#fff3b0' },
    { name: '참여마당', icon: '💭', color: '#87ceeb' },
    { name: '트래블', icon: '🖱️', color: '#26a69a' },
    { name: '부동산 경매', icon: '🏢', color: '#b2dfdb' },
    { name: '이벤트', icon: '🎉', color: '#ffe0b2' },
    { name: '차곡차곡 포인트', icon: 'P', color: '#ffb74d' },
    { name: '모임통장', icon: '👥', color: '#ce93d8' },
    { name: '가상자산', icon: '₿', color: '#81d4fa' },
  ];

  return (
    <div className="service-grid-container">
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div 
              className="service-icon" 
              style={{ backgroundColor: service.color }}
            >
              {service.icon}
            </div>
            <p className="service-name">{service.name}</p>
          </div>
        ))}
        <div className="service-card add-menu">
          <div className="service-icon add-icon">
            <span>+</span>
          </div>
          <p className="service-name">메뉴추가</p>
        </div>
      </div>
      
      <div className="bottom-buttons">
        <button className="bottom-button">
          <span>📋</span>
          <span>간편 홈</span>
        </button>
        <button className="bottom-button">
          <span>👥</span>
          <span>메뉴설정</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceGrid;

