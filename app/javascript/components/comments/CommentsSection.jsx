import React, { Fragment } from "react";

//Comments Styled Components
import * as CSC from "./CommentsStyledComponent";

//Avatar Styled Components
import * as ASC from "../list-avatars/AvatarStyledComponet";

//Post Styled Componenents
import * as PSC from "../post-headers/PostStyledComponent";
import moment from "moment";


const CommentsSection = ({ currentUser, post }) => {
  return (
    <Fragment>
      {currentUser.id ? (
        <Fragment>
          <CSC.CommentsContainer>
            <ASC.AvatarWrapper
              style={{ marginTop: "1px", marginBottom: "0px" }}
            >
              <ASC.Avatar src={currentUser.image} />
            </ASC.AvatarWrapper>
            <CSC.CommentTextarea placeholder="what do you think?" type="text" />
            <PSC.VisitButton
              style={{
                marginLeft: "auto",
              }}
            >
              Comment
            </PSC.VisitButton>
          </CSC.CommentsContainer>
          <div>
            {post.comments.length > 0
              ? post.comments.map((e, i) => (
                  <Fragment key={i}>
                    <div style={{ marginBottom: "20px" }}>
                      <div style={{ display: "flex" }}>
                        <ASC.AvatarWrapper style={{ marginRight: "10px" }}>
                          <ASC.Avatar src={e.user.image} />
                        </ASC.AvatarWrapper>
                        <CSC.CommentUserWrapper>
                          {e.user.name}
                        </CSC.CommentUserWrapper>
                        <CSC.CommentUserNameWrapper>
                          @{e.user.username}
                        </CSC.CommentUserNameWrapper>
                      </div>

                      <CSC.CommentDescriptionWrapper>
                        {e.text}
                      </CSC.CommentDescriptionWrapper>
                      <CSC.CommentInfoSection>
                        <CSC.CommentInfoText>Upvote (23)</CSC.CommentInfoText>
                        <CSC.CommentInfoText>Reply</CSC.CommentInfoText>
                        <CSC.CommentInfoText>Share</CSC.CommentInfoText>
                        <CSC.CommentInfoText>{moment(e.createdAt).fromNow()}</CSC.CommentInfoText>
                      </CSC.CommentInfoSection>
                    </div>
                  </Fragment>
                ))
              : "There are no comments for this post"}
          </div>
        </Fragment>
      ) : (
        "Please Click to Login and Try again"
      )}
    </Fragment>
  );
};

export default CommentsSection;
