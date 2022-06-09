import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 38px;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  src: url(${(props) => props.src});
  maxwidth: 100%;
`;
