import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi.js";
import FilterForm from "./components/FilterForm.jsx";
import PostList from "./components/PostList.jsx";
import { initialPostsState, postsReducer } from "./reducer/postsReducer.js";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const posts = await fetchPosts({ signal: controller.signal });
        dispatch({ type: "FETCH_SUCCESS", payload: posts });
      } catch (error) {
        // Aborting during cleanup is expected and should not be shown as an error.
        if (error.name !== "AbortError") {
          dispatch({
            type: "FETCH_ERROR",
            payload: error.message || "Something went wrong while loading posts.",
          });
        }
      }
    }

    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  const normalizedFilter = filter.trim().toLowerCase();
  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(normalizedFilter)
  );

  return (
    <main className="dashboard">
      <header className="page-header">
        <p className="eyebrow">REACT · WEEK 1 & 2</p>
        <h1>Post Dashboard</h1>
        <p className="subtitle">
          Browse posts from JSONPlaceholder and filter them by title.
        </p>
      </header>

      <FilterForm value={filter} onChange={setFilter} />

      {state.loading && <p className="status-message">Loading posts...</p>}

      {!state.loading && state.error && (
        <p className="error-message" role="alert">
          Could not load posts: {state.error}
        </p>
      )}

      {!state.loading && !state.error && (
        <>
          <p className="results-count" aria-live="polite">
            {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} found
          </p>
          <PostList posts={filteredPosts} />
        </>
      )}
    </main>
  );
}
