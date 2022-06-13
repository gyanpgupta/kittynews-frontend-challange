import React, { Fragment } from "react";

//GraphQL
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

//Components
import NewLaunches from "../footer-new-launches/NewLaunches";
import ListUsersAvatar from "../list-avatars/ListUsersAvatar";
import CommentsSection from "../comments/CommentsSection";

//Post Styled Componenets
import * as PSC from "./PostStyledComponent";

//Assets
import ArrowUp from "../../../assets/images/arrow-up-white.png";
import LaunchStatistics from "../footer-new-launches/LaunchStatistics";

const Post = ({ post, currentUser }) => {
  const voteIncrease = gql`mutation MeraMutation {
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

  const voteDecrease = gql`mutation MeraMutation {
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

  //GraphQL query Function to increase votes
  const [voteIncreaseMutation] = useMutation(voteIncrease, {
    variables: {
      postId: post.id,
    },
  });

  //GraphQL query Function to decrease votes
  const [voteDecreaseMutation] = useMutation(voteDecrease, {
    variables: {
      postId: post.id,
    },
  }
);

  //Function to validate the vote
  const checkValidateVote = () => {
    if (post) {
      return post.voters.some((user) => user.id === currentUser.id)
    } else {
      return false;
    }
  };
  const isVoter = post.voters.some((user) => user.id === currentUser.id)
  return (
    <Fragment>
      {currentUser ? (
        <div className="box">
          <div>
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
                  style={isVoter ?{backgroundColor: "#ff6115"}: {backgroundColor:"grey"}}
                    onClick={() =>
                      checkValidateVote()
                        ? voteDecreaseMutation()
                        : voteIncreaseMutation()
                    }
                  >        
                    <img style={{transform:`${isVoter? "rotate(180deg)":""}`, color: "black"}} src={ArrowUp} /> {isVoter? "DOWN VOTE" : "UPVOTE"} {post.votesCount}
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
            <div style={{ display: "flex", gap: "12px" }}>
              <ListUsersAvatar post={post} />
            </div>
          </div>

          {/* section 3 */}
          <PSC.PostCommentWrapper>
            <CommentsSection currentUser={currentUser} post={post} />
          </PSC.PostCommentWrapper>

          {/* section 4 */}
          <LaunchStatistics post={post} />

          {/* section 5 */}
          <NewLaunches />
        </div>
      ) : (
        "Please Click to Login and Try again"
      )}
    </Fragment>
  );
};

export default Post;
