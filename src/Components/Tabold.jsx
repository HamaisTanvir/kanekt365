// r
import React from 'react'
import {useState} from 'react'

const Tabs = () => {
        const [activeTab, setActiveTab] = useState('tab1');
      
        const handleTabClick = (tabId) => {
          setActiveTab(tabId);
        };
  return (
    <div className="max-w-2xl mx-auto">
    <div className="flex border-b border-gray-200">
      <button
        id="tab1"
        className={`py-2 px-4 bg-white hover:bg-gray-100 focus:outline-none ${
          activeTab === 'tab1' ? 'border-b-2 border-blue-500' : ''
        }`}
        onClick={() => handleTabClick('tab1')}
      >
        Tab 1
      </button>
      <button
        id="tab2"
        className={`py-2 px-4 bg-white hover:bg-gray-100 focus:outline-none ml-2 ${
          activeTab === 'tab2' ? 'border-b-2 border-blue-500' : ''
        }`}
        onClick={() => handleTabClick('tab2')}
      >
        Tab 2
      </button>
      <button
        id="tab3"
        className={`py-2 px-4 bg-white hover:bg-gray-100 focus:outline-none ml-2 ${
          activeTab === 'tab3' ? 'border-b-2 border-blue-500' : ''
        }`}
        onClick={() => handleTabClick('tab3')}
      >
        Tab 3
      </button>
    </div>

    <div id="tab-content-1" className={`mt-4 ${activeTab === 'tab1' ? '' : 'hidden'}`}>
      <p>This is the content of Tab 1.</p>
    </div>
    <div id="tab-content-2" className={`mt-4 ${activeTab === 'tab2' ? '' : 'hidden'}`}>
      <p>This is the content of Tab 2.</p>
    </div>
    <div id="tab-content-3" className={`mt-4 ${activeTab === 'tab3' ? '' : 'hidden'}`}>
      <p>This is the content of Tab 3.</p>
    </div>
  </div>
  )
}

export default Tabs