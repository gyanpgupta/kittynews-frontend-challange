import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import PostQuery from "./showall-post-query";

const NewLaunches = () => {
  const { data, loading, error } = useQuery(PostQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.postsAll.map((post, i) => (
        <Fragment key={i}>
          <img src={post.image} />
          Title: {post.title}
          tagline: {post.tagline}
          Upvotes: {post.votesCount}
          Comments: {post.commentsCount}
        </Fragment>
      ))}
    </div>
  );
};

export default NewLaunches;
