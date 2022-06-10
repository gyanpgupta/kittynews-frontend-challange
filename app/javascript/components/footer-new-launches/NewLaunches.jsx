import React, { Fragment } from "react";

//GraphQL
import { useQuery } from "@apollo/react-hooks";
import ShowAllPostQuery from "../../graphql-queries/ShowAllPostQuery";

const NewLaunches = () => {
  const { data, loading, error } = useQuery(ShowAllPostQuery);

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
