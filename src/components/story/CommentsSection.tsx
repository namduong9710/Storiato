'use client'; // Needed for state (comment input) and potential interaction

import React, { useState } from 'react';

// Mock comment type - Replace with actual type later
interface Comment {
  id: string;
  username: string;
  timestamp: string;
  text: string;
  // replies?: Comment[]; // Optional for nested comments
}

// Mock data - Replace with actual data fetching
const mockComments: Comment[] = [
  {
    id: 'c1', username: 'ReaderFan123', timestamp: '2024-07-25T10:00:00Z',
    text: 'This story is amazing! Can\'t wait for the next chapter.'
  },
  {
    id: 'c2', username: 'Bookworm88', timestamp: '2024-07-25T11:30:00Z',
    text: 'I really like the main character\'s development.'
  },
];

const CommentsSection = () => {
  const [newComment, setNewComment] = useState('');
  // TODO: Add state for submitting status, error handling
  // TODO: Add login check - only show input if logged in

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return; // Basic validation
    console.log('Submitting comment:', newComment);
    alert('Comment submission placeholder!');
    setNewComment('');
    // TODO: Implement actual comment submission API call
    // TODO: Add the new comment to the list optimistically or refetch
  };

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Comments ({mockComments.length})</h2>

      {/* Comment Input Form (Show only if logged in) */}
      {/* TODO: Replace true with actual login status check */}
      {true && (
         <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your comment... (Login required)"
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm mb-2"
          />
          <button
            type="submit"
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium disabled:opacity-50"
            // disabled={/* Add submitting state check */}
          >
            Post Comment
          </button>
        </form>
      )}
      {!true && <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Please log in to post comments.</p>}

      {/* List of Comments */}
      <div className="space-y-4">
        {mockComments.length > 0 ? (
          mockComments.map((comment) => (
            <div key={comment.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{comment.username}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(comment.timestamp).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{comment.text}</p>
               {/* TODO: Add Reply button/functionality */}
            </div>
          ))
        ) : (
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">Be the first to comment!</p>
        )}
      </div>

      {/* TODO: Add pagination for comments if needed */}
    </div>
  );
};

export default CommentsSection; 