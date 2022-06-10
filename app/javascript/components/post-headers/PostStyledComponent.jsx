import styled from "styled-components";

export const PostImageHeader = styled.img`
  src: url(${(props) => props.src});
  width: 80px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostTagLine = styled.p`
  font-size: 16px;
  font-height: 400;
  margin-top: 0px;
`;
export const UpVoteSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const VisitButton = styled.button`
  border: solid 1px #dddddd;
  background-color: white;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
`;
export const UpVoteButton = styled.button`
  border: solid 1px #ff6115;
  background-color: #ff6115;
  padding: 10px 18px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  img {
    width: 10px;
    margin-right: 8px;
  }
`;

export const PostDescriptionSection = styled.div`
  background-color: transparent;
  padding: 0px;
  border: none;
  margin-top: 20px;
  color: #505050;
  fontsize: 13px;
  line-height: 21px;
`;
export const ShowPostAvatarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;

export const PostCommentWrapper = styled.div`
border-top: solid 1px #e5e5e5;
padding-top: 12px;
margin-top: 20px;
`
