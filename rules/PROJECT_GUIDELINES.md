# Storiato Frontend Project Guidelines

## 1. Project Purpose

*   **Goal:** To build a modern, responsive, and SEO-friendly frontend for the Storiato web novel platform, similar in functionality to truyenfull.vision.
*   **Backend:** The frontend will interact with an ASP.NET backend API.
*   **Key Features:** Displaying novels (hot, new, completed, by genre), reading chapters, user search, user authentication (eventually).

## 2. General Conventions

*   **Language:** TypeScript
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Linting/Formatting:** ESLint + Prettier (using Next.js defaults unless specified otherwise)
*   **Naming:**
    *   Components: PascalCase (e.g., `NovelCard.tsx`)
    *   Variables/Functions: camelCase (e.g., `fetchNovelData`)
    *   Types/Interfaces: PascalCase (e.g., `NovelCardInfo`)
    *   CSS Classes: Use Tailwind utility classes primarily. Custom classes (if needed) should follow BEM-like naming or be clearly descriptive.
*   **Comments:** Use comments (`//` or `/* */`) to explain complex logic, workarounds, or `TODO` items. Avoid commenting obvious code.

## 3. React/Next.js Conventions

*   **Component Structure:** Prefer functional components with hooks. Keep components focused on a single responsibility.
*   **Data Fetching:**
    *   Use Server Components with `async/await` for initial data loading where possible (good for SEO).
    *   Use Client Components (`"use client";`) with `useState`/`useEffect` for interactive elements or when client-side state/APIs are needed (like reading settings).
    *   API calls should be routed through functions defined in `src/lib/api.ts`.
*   **State Management:**
    *   Use local component state (`useState`) for component-specific data.
    *   Use React Context for simple global state (e.g., theme, auth status) if needed. Consider Zustand or Jotai for more complex global state if Context becomes unwieldy.
*   **Routing:** Use the Next.js App Router conventions (folder-based routing). Use `<Link>` for internal navigation.

## 4. Styling Conventions (Tailwind CSS)

*   **Utility-First:** Prioritize using Tailwind utility classes directly in the JSX.
*   **Responsiveness:** Use Tailwind's responsive modifiers (`sm:`, `md:`, `lg:`, etc.) for mobile-first design.
*   **Custom Styles:** If complex or repeated styles are needed, consider creating a reusable component or using Tailwind's `@apply` directive sparingly in `globals.css` for custom utility classes.
*   **Theme:** Define theme colors, fonts, etc., in `tailwind.config.js` if necessary for consistency.

## 5. API Interaction Conventions

*   All backend API calls should be encapsulated within functions in `src/lib/api.ts`.
*   Use environment variables (e.g., `NEXT_PUBLIC_API_URL`) for the API base URL.
*   Implement basic error handling (e.g., `try/catch`) within API functions and handle loading/error states appropriately in the UI components.
*   Define TypeScript types/interfaces for API request bodies and responses in `src/types/index.ts`.

## 6. AI Assistant Guidelines

*   The AI assistant (Gemini, Claude) should adhere to these guidelines when generating or modifying code.
*   File paths should always be relative to the `storiato-frontend` project root unless explicitly stated otherwise.
*   When adding new components or significant features, briefly explain how they fit within the established conventions.

---

*This document can be updated as the project evolves.* 