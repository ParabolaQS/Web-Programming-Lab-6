# Assignment 6 — Post Dashboard

A React + Vite dashboard that fetches posts from JSONPlaceholder, displays loading/error/empty states, and filters posts by title.

## File organization

- `src/api/postsApi.js` — Fetches posts using the browser Fetch API and reports unsuccessful HTTP responses.
- `src/reducer/postsReducer.js` — Pure reducer for `FETCH_START`, `FETCH_SUCCESS`, and `FETCH_ERROR`.
- `src/components/Post.jsx` — Presentational component for one post.
- `src/components/PostList.jsx` — Renders posts with `.map()` and stable post IDs as keys; displays the empty state.
- `src/components/FilterForm.jsx` — Controlled title-filter input.
- `src/App.jsx` — Owns reducer state and filter state, fetches posts in `useEffect`, and derives filtered posts during render.
- `src/main.jsx` — React entry point.
- `src/styles.css` — Basic responsive styling.
- `index.html` — Vite HTML entry point.

## Challenges addressed

- Keeping asynchronous state transitions in a pure reducer instead of scattering loading, error, and data updates across separate state variables.
- Preventing stale fetch work during unmount by aborting the request with `AbortController` and ignoring the expected abort error.
- Showing loading, readable error, and empty-result states without crashing the UI.
- Treating filtered posts as derived data: only the original posts and filter text are stored in state.

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify a production build, run:

```bash
npm run build
```

`node_modules` is intentionally not included in this submission. The API requires an internet connection.
# Web-Programming-Lab-6
