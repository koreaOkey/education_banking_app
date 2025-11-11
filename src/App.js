import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AccountSection from './components/AccountSection';
import ServiceGrid from './components/ServiceGrid';
import QuickMenu from './components/QuickMenu';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Banner />
            <AccountSection />
            <QuickMenu />
            <ServiceGrid />
          </>
        );
      case 'benefits':
        return (
          <div className="empty-page">
            <div className="empty-content">
              <p className="empty-title">혜택</p>
            </div>
          </div>
        );
      case 'assets':
      case 'products':
      case 'menu':
        return (
          <>
            <Banner />
            <AccountSection />
            <QuickMenu />
            <ServiceGrid />
          </>
        );
      default:
        return (
          <>
            <Banner />
            <AccountSection />
            <QuickMenu />
            <ServiceGrid />
          </>
        );
    }
  };

  return (
    <div className="App">
      <div className="mobile-container">
        <Header />
        <div className="content">
          {renderContent()}
        </div>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;

