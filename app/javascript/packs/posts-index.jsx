import React from "react";
import { useQuery } from "react-apollo";
import renderComponent from "./utils/renderComponent";
import ShowAllPostQuery from "../graphql-queries/ShowAllPostQuery";

function PostsIndex() {
  const { data, loading, error } = useQuery(ShowAllPostQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="box">
      {data.postsAll.map((post) => (
        <article className="post" key={post.id}>
          <h2>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </h2>
          <div className="url">
            <a href={post.url}>{post.url}</a>
          </div>
          <div className="tagline">{post.tagline}</div>
          <footer>
            <button>🔼 0 </button>
            <button>💬 {post.commentsCount}</button>
          </footer>
        </article>
      ))}
    </div>
  );
}

renderComponent(PostsIndex);
