import React, { Fragment } from "react";

//Avatar Styled Components
import * as ASC from "./AvatarStyledComponet";

const ListUsersAvatar = ({ post }) => {
  return (
    <Fragment>
      {" "}
      <div style={{ position: "relative" }}>
        <ASC.AvatarWrapper>
          <ASC.Avatar src={post.user.image} />
        </ASC.AvatarWrapper>
        <ASC.AvatarIndicators style={{ backgroundColor: "#606673" }}>
          H
        </ASC.AvatarIndicators>
      </div>
      {post.commenters.map((e, i) => (
        <Fragment key={i}>
          <div style={{ position: "relative" }}>
            <ASC.AvatarWrapper>
              <ASC.Avatar src={e.image} />
            </ASC.AvatarWrapper>
            <ASC.AvatarIndicators style={{ backgroundColor: "#005df7" }}>
              C
            </ASC.AvatarIndicators>
          </div>
        </Fragment>
      ))}
      {post.voters.map((e, i) => (
        <Fragment key={i}>
          <div style={{ position: "relative" }}>
            <ASC.AvatarWrapper>
              <ASC.Avatar src={e.image} />
            </ASC.AvatarWrapper>
            <ASC.AvatarIndicators style={{ backgroundColor: "#f7510e" }}>
              V
            </ASC.AvatarIndicators>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ListUsersAvatar;
