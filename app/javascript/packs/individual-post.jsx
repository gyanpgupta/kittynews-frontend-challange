import React, { Fragment } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import NewLaunches from "./new-launches";

const IndividualPost = ({ post, currentUser }) => {
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
        <img src={post.image} style={{width: "80px"}}/>
        <p>
          {" "}
          <strong>{post.title}.</strong>
        </p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p style={{fontSize: '16px', fontWeight: '400', marginTop: '0px'}}>
            {post.tagline}
          </p>
          <div style={{display: 'flex', gap: '10px'}}>
            <a href={post.url}>
                <button style={{ border: 'solid 1px #dddddd', backgroundColor: 'white', padding: '10px 18px', borderRadius: '4px'}}>Visit</button>
              </a>
              <div className="url">
                <button
                  onClick={() =>
                    checkValidateVote()
                      ? upVoteDecreaseMutation()
                      : upVoteIncreaseMutation()
                  }
                  style={{ border: 'solid 1px #ff6115', backgroundColor: '#ff6115', padding: '10px 18px', borderRadius: '4px', color: 'white'}}
                >
                  UPVOTE {post.votesCount}
                </button>
              </div>
          </div>
        </div>
        <div className="box" style={{ backgroundColor: 'transparent', padding: '0px', border: 'none', marginTop: '20px', color: '#505050', fontSize: '13px', lineHeight: '21px'}}>
          <article className="post">
            <div className="tagline">{post.description}</div>
          </article>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '30px'}}>
          <Fragment>
          {post.commenters.map((e, i) => (
            <Fragment key={i}>
              <div style={{width: '40px', height: '40px', borderRadius: '100%', overflow: 'hidden', marginBottom: '10px'}}><img style={{maxWidth: '100%'}} src={e.image} /></div>
            </Fragment>
          ))}
         </Fragment>
        </div>
      </div>

      {/* section 2 */}
      

      {/* section 3 */}
      <div className="box">
        <div className="box" style={{display: 'flex', backgroundColor: 'transparent', padding: '0px', border: 'none', marginTop: '0px', color: '#505050', fontSize: '13px', lineHeight: '21px', alignItems: 'center', gap: '15px', borderBottom: 'solid 1px #e5e5e5', paddingBottom: '12px', marginBottom: '22px'}}>
        <div style={{width: '40px', height: '40px', borderRadius: '100%', overflow: 'hidden', marginBottom: '10px'}}><img style={{maxWidth: '100%'}} src={currentUser.image} /></div>
          <textarea style={{ width: '82%', border: 'none', resize: 'none', outline: 'none'}} placeholder="what do you think?" type="text" />
          <button style={{ border: 'solid 1px #dddddd', backgroundColor: 'white', padding: '10px 18px', borderRadius: '4px', marginLeft: 'auto'}}>Comment</button>
        </div>
        <div>
          {post.comments.map((e, i) => (
            <Fragment key={i}>
              <img src={e.user.image} />
              <p>@{e.user.username}</p>
              <p>{e.user.name}</p>
              <strong>{e.text}</strong>
              <p>Upvote (23)</p>
              <p>Reply</p>
              <p>Share</p>
              <p>{e.createdAt}</p>
            </Fragment>
          ))}
        </div>
      </div>

      {/* section 4 */}
      <div>
        <strong>Upvotes {post.votesCount}</strong>
        <strong>Comments {post.commentsCount}</strong>
        <strong>Views {post.viewsCount}</strong>
        <strong>Daily Rank #{post.dailyFeedPosition}</strong>
        <strong>Weekly Rank #{post.weeklyFeedPosition}</strong>
      </div>

      {/* section 5 */}
      <NewLaunches />
    </Fragment>
  );
};

export default IndividualPost;
