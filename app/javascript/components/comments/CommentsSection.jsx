import React, { Fragment } from "react";

//Comments Styled Components
import * as CSC from "./CommentsStyledComponent";

//Avatart Styled Components
import * as ASC from "../list-avatars/AvatarStyledComponet";

//Post Styled Componenents
import * as PSC from "../post-headers/PostStyledComponent";

const CommentsSection = ({ currentUser, post }) => {
  return (
    <Fragment>
      <CSC.CommentsContainer className="box">
        <ASC.AvatarWrapper>
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
        {post.comments.map((e, i) => (
          <Fragment key={i}>
            <ASC.AvatarWrapper>
              <ASC.Avatar src={e.user.image} />
            </ASC.AvatarWrapper>
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
    </Fragment>
  );
};

export default CommentsSection;
