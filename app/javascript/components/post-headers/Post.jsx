import React, { Fragment } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import NewLaunches from "../footer-new-launches/NewLaunches";
import * as PSC from "./PostStyledComponent";
import ListUsersAvatar from "../list-avatars/ListUsersAvatar";
import CommentsSection from "../comments/CommentsSection";

const Post = ({ post, currentUser }) => {
  const upVoteIncrease = gql`
  mutation MeraMutation {
    voteAdd(postId: ${post.id}) {
      post {
        id
        voters {
          id
        }
        votesCount
      }
    }
  }`;

  const upVoteDecrease = gql`mutation MeraMutation {
    voteRemove(postId: ${post.id}) {
      post {
        id
        voters {
          id
        }
        votesCount
      }
    }
  }`;

  const [upVoteIncreaseMutation] = useMutation(upVoteIncrease, {
    variables: {
      postId: post.id,
    },
  });
  const [upVoteDecreaseMutation] = useMutation(upVoteDecrease, {
    variables: {
      postId: post.id,
    },
  });
  const checkValidateVote = () => {
    if (post) {
      return post.voters.some((user) => user.id === currentUser.id);
    } else {
      return false;
    }
  };
  return (
    <Fragment>
      <div className="box">
        {/* section 1 */}
        <PSC.PostImageHeader src={post.image} />
        <p>
          {" "}
          <strong>{post.title}.</strong>
        </p>
        <PSC.HeaderContainer>
          <PSC.PostTagLine>{post.tagline}</PSC.PostTagLine>
          <PSC.UpVoteSection>
            <a href={post.url}>
              <PSC.VisitButton>Visit</PSC.VisitButton>
            </a>
            <div className="url">
              <PSC.UpVoteButton
                onClick={() =>
                  checkValidateVote()
                    ? upVoteDecreaseMutation()
                    : upVoteIncreaseMutation()
                }
              >
                🔼 UPVOTE {post.votesCount}
              </PSC.UpVoteButton>
            </div>
          </PSC.UpVoteSection>
        </PSC.HeaderContainer>
        <PSC.PostDescriptionSection className="box">
          <article className="post">
            <div className="tagline">{post.description}</div>
          </article>
        </PSC.PostDescriptionSection>

        {/* section 2 */}
        <PSC.ShowPostAvatarWrapper>
          <ListUsersAvatar post={post} />
        </PSC.ShowPostAvatarWrapper>
      </div>

      {/* section 3 */}
      <div className="box">
        <CommentsSection currentUser={currentUser} post={post} />
      </div>

      {/* section 4 */}
      <div>
        <strong>Upvotes {post.votesCount} | </strong>
        <strong>Comments {post.commentsCount} | </strong>
        <strong>Views {post.viewsCount} | </strong>
        <strong>Daily Rank #{post.dailyFeedPosition} | </strong>
        <strong>Weekly Rank #{post.weeklyFeedPosition} | </strong>
      </div>

      {/* section 5 */}
      <NewLaunches />
    </Fragment>
  );
};

export default Post;
