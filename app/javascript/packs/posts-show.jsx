import React, { Fragment } from "react";
import renderComponent from "./utils/renderComponent";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

function PostsShow({ postId }) {
  const post = { user: {} };
  const showQuery = gql`
    query PostsPage {
      viewer {
        id
      }
      post(id: ${postId}) {
        id
        title
        tagline
        url
        commentsCount
        votesCount
        isVoted
        description
        viewsCount
        dailyFeedPosition
        weeklyFeedPosition
        image
        makers {
          id
        }
        user {
          id
        }
        commenters {
          id
        }
        voters {
          id
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(showQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Fragment>
      <div className="box">
        <img src={data.post.image}/>
        <strong>{data.post.title}.</strong>
        <br />
        <em>{data.post.tagline}</em>
      </div>
      <div className="box">
        <article className="post">
        <a href={data.post.url}>
          <button>
            Visit
          </button>
          </a>
          <div className="url">
           <button>
             UPVOTE {data.post.votesCount}
           </button>
          </div>
          <div className="tagline">{data.post.description}</div>
          <div>
            {data}
          </div>
          <footer>
            <button>🔼 0 </button> {post.commentsCount} comments | author:{" "}
            {post.user.name}
          </footer>
        </article>
      </div>
      <div className="box">
        <strong>TODO: Show post comments</strong>
      </div>
    </Fragment>
  );
}

renderComponent(PostsShow);
