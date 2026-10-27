import Post from "./Post.jsx";

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p className="empty-state">No posts found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
