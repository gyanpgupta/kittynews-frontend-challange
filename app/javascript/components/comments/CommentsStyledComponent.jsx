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
