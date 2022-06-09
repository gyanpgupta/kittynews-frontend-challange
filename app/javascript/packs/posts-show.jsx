import React, { Fragment, useEffect, useState } from "react";
import renderComponent from "./utils/renderComponent";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import IndividualPost from "./individual-post";

function PostsShow({ postId }) {
  const showQuery = gql`
    query PostsPage {
      viewer {
        id
        username
        image
      }
      post(id: 1) {
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
        comments {
          id
          text
          createdAt
          user {
            id
            name
            username
            image
          }
        }
        commenters {
          id
          image
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

  return <IndividualPost post={data.post} currentUser={data.viewer} />;
}

renderComponent(PostsShow);
