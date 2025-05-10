import React from 'react';

const ContributionsTab = () => {
  // TODO: Fetch user contributions (uploaded novels/translations)
  const hasContributions = false; // Placeholder

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 dark:text-white">My Contributions</h3>

      {hasContributions ? (
        <div>
          {/* TODO: Display list/grid of contributed stories */}
          <p className="text-gray-600 dark:text-gray-400">Contribution list placeholder...</p>
        </div>
      ) : (
        <div className="text-center p-6 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400 mb-3">You haven't contributed any stories or translations yet.</p>
          {/* TODO: Link to contribution upload page/modal */}
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-medium">
            Contribute Now
          </button>
        </div>
      )}
    </div>
  );
};

export default ContributionsTab; 