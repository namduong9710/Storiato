import React from 'react';

// Import page-specific components
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileTabs from '@/components/profile/ProfileTabs';
import ProfileSidebar from '@/components/profile/ProfileSidebar';

// --- Mock Data & Fetch Function ---

// Mock user type - should match ProfileHeader definition
interface UserProfile {
  username: string;
  avatarUrl?: string;
  joinDate: string;
}

// Mock data for the current user
const mockUser: UserProfile = {
  username: 'CurrentUser123',
  // avatarUrl: '/path/to/user/avatar.jpg', // Optional
  joinDate: '2023-10-26T08:00:00Z',
};

// Placeholder function to get current user profile data
async function getUserProfile(): Promise<UserProfile> {
  console.log('Fetching mock user profile data');
  // TODO: Replace with actual API call to get logged-in user data
  // This might involve checking authentication state first
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate delay
  return mockUser;
}

// --- Page Component ---
// Note: This page assumes it's for the *currently logged-in* user.
// A public profile page might look like /profile/[username] or /user/[userId]
export default async function ProfilePage() {

  // TODO: Add authentication check here. Redirect if not logged in.
  const user = await getUserProfile();

  return (
    <div className="container mx-auto px-4 mt-8">
       {/* TODO: Add actual Header component here */}
      <h1 className="text-3xl font-bold mb-6 dark:text-white">My Profile</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Main Content Area */}
        <div className="flex-grow space-y-6">
          <ProfileHeader user={user} />
          <ProfileTabs /> {/* Tabs component handles its own content */}
        </div>

        {/* Sidebar (Hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block w-full lg:w-auto">
          <ProfileSidebar />
        </div>
      </div>

      {/* TODO: Add actual Footer component here - Footer is typically in layout.tsx */}
    </div>
  );
} 