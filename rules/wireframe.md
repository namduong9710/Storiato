# Website Wireframe for Online Novel Platform

## 1. Homepage
**Purpose**: Welcome users, showcase popular and new stories, and provide quick access to key features.
**Layout**:
- **Header** (Sticky):
  - Logo (left): Platform name or logo linking to homepage.
  - Search Bar (center): Placeholder text “Search stories, authors, or genres” with a magnifying glass icon.
  - Navigation Menu (right): Links to “Browse Genres,” “Completed Stories,” “Community,” “Login/Signup.”
  - Theme Toggle (right): Switch between dark/light mode.
- **Hero Section**:
  - Full-width banner with a dynamic carousel showcasing featured stories (image, title, synopsis, “Read Now” button).
- **Main Content**:
  - **Featured Stories** (Grid, 3 columns desktop, 1 column mobile):
    - Story cards with cover image, title, author, genre tags, and rating (stars).
  - **New Releases** (Horizontal scrollable list):
    - Smaller cards with story title, chapter number, and update date.
  - **Popular Genres** (Grid, 4 columns desktop, 2 columns mobile):
    - Genre tiles with icons and names (e.g., Ngôn Tình, Tiên Hiệp).
- **Sidebar** (Desktop only, hidden on mobile):
  - “Trending Stories” list with titles and view counts.
  - “Recent Activity” feed (e.g., “User X favorited Story Y”).
- **Footer**:
  - Links to About, Contact, Terms of Service, Privacy Policy.
  - Social media icons and newsletter signup form.

## 2. Story Listing Page
**Purpose**: Allow users to browse stories by genre, status, or search criteria.
**Layout**:
- **Header**: Same as Homepage.
- **Filters Section** (Sticky on scroll):
  - Dropdowns for Genre, Status (Completed/Ongoing), Sort By (Popularity, Update Date, Rating).
  - Tag Cloud: Clickable tags like “Slow Burn,” “Strong Female Lead.”
  - Search Bar (redundant for accessibility).
- **Main Content**:
  - Story Grid (3 columns desktop, 1 column mobile):
    - Story cards with cover image, title, author, synopsis (truncated), genre tags, and “Add to Favorites” button.
  - Pagination Controls (bottom): Previous/Next buttons and page numbers.
- **Sidebar**:
  - “Recommended Stories” based on user preferences.
  - “Top Authors” list with names and story counts.
- **Footer**: Same as Homepage.

## 3. Story Detail Page
**Purpose**: Display a specific story’s details and chapters.
**Layout**:
- **Header**: Same as Homepage.
- **Main Content**:
  - **Story Header**:
    - Cover image (left), title, author, rating, and genre tags (right).
    - Buttons: “Start Reading,” “Add to Favorites,” “Share.”
  - **Synopsis Section**: Collapsible text box with full story description.
  - **Chapter List**:
    - Table with columns for chapter number, title, release date, and “Read” button.
    - Pagination for large chapter lists.
  - **Comments Section**:
    - Text input for posting comments (login required).
    - List of user comments with username, timestamp, and reply button.
- **Sidebar**:
  - “Similar Stories” recommendations.
  - Author bio and links to their other works.
- **Footer**: Same as Homepage.

## 4. User Profile Page
**Purpose**: Allow users to manage their account, favorites, and contributions.
**Layout**:
- **Header**: Same as Homepage.
- **Main Content**:
  - **Profile Header**:
    - User avatar, username, and join date.
    - Edit Profile button (for bio, avatar, preferences).
  - **Tabs**:
    - Favorites: Grid of favorited stories.
    - Reading History: List of recently read chapters with timestamps.
    - Contributions: Stories or translations uploaded by the user (if applicable).
    - Analytics: Reading stats (e.g., genres read, total chapters).
- **Sidebar**:
  - “Followed Authors” list.
  - “Community Activity” feed (e.g., comments posted).
- **Footer**: Same as Homepage.

## 5. Community Page
**Purpose**: Facilitate user interaction through forums and discussions.
**Layout**:
- **Header**: Same as Homepage.
- **Main Content**:
  - **Forum Categories**:
    - List of topics (e.g., “General Discussion,” “Story Requests,” “Author Q&A”).
  - **Thread List**:
    - Table with thread title, creator, reply count, and last activity.
    - “Create New Thread” button (login required).
  - **Pinned Threads**: Highlighted discussions or announcements.
- **Sidebar**:
  - “Active Users” list with avatars and usernames.
  - “Popular Threads” based on reply count.
- **Footer**: Same as Homepage.

## Notes
- **Responsive Design**: Use CSS Grid and Flexbox for layouts, with media queries to adjust column counts and hide sidebars on mobile.
- **Interactive Elements**: Add tooltips for buttons, loading spinners for async content, and modals for login/signup.
- **Dynamic Features**: Implement lazy loading for images, infinite scroll for story lists (optional)