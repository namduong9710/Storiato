'use client';

import React, { useState } from 'react';
import FavoritesTab from './FavoritesTab';
import ReadingHistoryTab from './ReadingHistoryTab';
import ContributionsTab from './ContributionsTab';
import AnalyticsTab from './AnalyticsTab';

// Define available tabs
type TabKey = 'favorites' | 'history' | 'contributions' | 'analytics';

const tabConfig: { key: TabKey; label: string; component: React.ReactNode }[] = [
  { key: 'favorites', label: 'Favorites', component: <FavoritesTab /> },
  { key: 'history', label: 'Reading History', component: <ReadingHistoryTab /> },
  { key: 'contributions', label: 'Contributions', component: <ContributionsTab /> },
  { key: 'analytics', label: 'Analytics', component: <AnalyticsTab /> },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(tabConfig[0].key); // Default to first tab

  return (
    <div>
      {/* Tab Navigation Buttons */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
          {tabConfig.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-150 ease-in-out
                ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
                }`}
              aria-current={activeTab === tab.key ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Active Tab Content */}
      <div>
        {tabConfig.find(tab => tab.key === activeTab)?.component}
      </div>
    </div>
  );
};

export default ProfileTabs; 