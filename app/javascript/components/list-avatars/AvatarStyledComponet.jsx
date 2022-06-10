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

export const AvatarIndicators = styled.span`
position: absolute;
margin: 0 auto;
left: 0px;
right: 0px;
bottom: 3px;
width: 16px;
height: 16px;
border-radius: 50%;
background-color: green;
display: flex;
align-items: center;
justify-content:center;
font-size: 8px;
color: white;
`