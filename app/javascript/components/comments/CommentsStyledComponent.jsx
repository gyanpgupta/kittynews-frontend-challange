import styled from "styled-components";

export const CommentsContainer = styled.div`
  display: flex;
  background-color: transparent;
  padding: 0px;
  border: none;
  margin-top: 0px;
  color: #505050;
  font-size: 13px;
  line-height: 21px;
  align-items: center;
  gap: 15px;
  border-bottom: solid 1px #e5e5e5;
  padding-bottom: 12px;
  margin-bottom: 22px;
`;

export const CommentTextarea = styled.textarea`
  width: 82%;
  border: none;
  resize: none;
  outline: none;
  cursor: text;
`;

export const CommentUserWrapper = styled.p`
  font-weight: 600;
  color: #000;
`;

export const CommentUserNameWrapper = styled.p`
  color: #828282;
  margin-left: 8px;
`;
export const CommentDescriptionWrapper = styled.div`
  color: #828282;
  font-weight: 400;
  font-size: 12px;
`;

export const CommentInfoSection = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const CommentInfoText = styled.p`
  color: #000;
  font-weight: 600;
  font-size: 12px;
`;
