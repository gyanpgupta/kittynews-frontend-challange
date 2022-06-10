import React, { Fragment } from "react";

//Avatar Styled Components
import * as ASC from "./AvatarStyledComponet";

const ListUsersAvatar = ({ post }) => {
  return (
    <Fragment>
      {" "}
      {post.commenters.map((e, i) => (
        <Fragment key={i}>
          <ASC.AvatarWrapper>
            <ASC.Avatar src={e.image} />
          </ASC.AvatarWrapper>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ListUsersAvatar;
