import React, { useState } from 'react';
import Tabsection1 from './Tabsection1';
import Tabsection2 from './Tabsection2';
import Tabsection3 from './Tabsection3';

const Mainform = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  const handleNext = (nextTab) => {
    setActiveTab(nextTab);
  };

 
  return (
    <div className="tabs-wrapper">
      <div className="tab-buttons">
        <button  style={{ fontSize: '1.2rem',fontWeight: 'bold' } } onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Section 1</button>
        <button style={{ fontSize: '1.2rem',fontWeight: 'bold' }} onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>Section 2</button>
        <button style={{ fontSize: '1.2rem',fontWeight: 'bold' }} onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>Section 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <Tabsection1 onNext={handleNext} />}
        {activeTab === 'tab2' && <Tabsection2 onNext={handleNext} />}
        {activeTab === 'tab3' && <Tabsection3 onNext={handleNext} />}
      </div>
    </div>
  );
}

export default Mainform;
