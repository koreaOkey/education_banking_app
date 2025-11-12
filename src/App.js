import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AccountSection from './components/AccountSection';
import ServiceGrid from './components/ServiceGrid';
import QuickMenu from './components/QuickMenu';
import BottomNav from './components/BottomNav';
import BenefitsGrid from './components/BenefitsGrid';

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
        return <BenefitsGrid />;
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

