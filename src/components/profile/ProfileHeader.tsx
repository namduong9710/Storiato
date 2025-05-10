import React from 'react';
import Image from 'next/image';

// Mock user type - replace with actual type later
interface UserProfile {
  username: string;
  avatarUrl?: string;
  joinDate: string; // Or Date object
}

interface ProfileHeaderProps {
  user: UserProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      {/* Avatar */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-300 dark:bg-gray-600">
        <Image
          src={user.avatarUrl || '/default-avatar.png'} // Add a default avatar later
          alt={`${user.username}'s avatar`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="96px"
        />
      </div>

      {/* User Info */}
      <div className="flex-grow text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.username}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Joined: {new Date(user.joinDate).toLocaleDateString()}
        </p>
      </div>

      {/* Edit Button */}
      <div className="mt-2 sm:mt-0">
        {/* TODO: Link to profile edit page or open modal */}
        <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm font-medium">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader; 