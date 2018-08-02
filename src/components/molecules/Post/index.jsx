import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { dateToString } from "util/functions";

import { StyledLink } from "styles";

const Post = ({ id, user: { username }, title, content, createdAt }) => (
  <StyledArticle>
    <StyledLink to={`/threads/${id}`}>
      <TitleText>{title} </TitleText>
      <BodyText>{content} </BodyText>
    </StyledLink>
    <UserText>
      posted by: <StyledLink to={`/users/${username}`}>{username}</StyledLink>{" "}
      at {dateToString(createdAt)}
    </UserText>
  </StyledArticle>
);

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};

const StyledArticle = styled.article`
  margin: 0;
`;

const TitleText = styled.h3`
  /* box */
  margin-bottom: 0;

  /* text */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserText = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.8em;
`;

const BodyText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Post;
