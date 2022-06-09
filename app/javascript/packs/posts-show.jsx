import React, { Fragment, useEffect, useState } from "react";
import renderComponent from "./utils/renderComponent";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import Post from "../components/post-headers/Post";

function PostsShow({ postId }) {
  const showQuery = gql`
    query PostsPage {
      viewer {
        id
        username
        image
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

  return <Post post={data.post} currentUser={data.viewer} />;
}

renderComponent(PostsShow);
