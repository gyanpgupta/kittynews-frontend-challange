import React from 'react';
import gql from 'graphql-tag';

const PostQuery = gql`
query PostsPage {
    viewer {
      id
    }
    postsAll {
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

export default PostQuery