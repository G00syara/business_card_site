import styled from '@emotion/styled';
import React from 'react';
import Blog from './Blog';
import { BLOG_PAGE_UNDERLINE } from 'const/colors';
import { blogs } from 'const/elements';

const BlogPage = () => {
  return (
    <PageContainer>
      <HeaderContainer>
        <HeaderText>My Blog</HeaderText>
        <Underline />
      </HeaderContainer>
      <BlogsContainer>
        {blogs.map((blog) => {
          return <Blog key={blog.title} title={blog.title} date={blog.date} description={blog.description} />;
        })}
      </BlogsContainer>
    </PageContainer>
  );
};

export default BlogPage;

const PageContainer = styled.div`
  border-top: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60vh;
  position: relative;
`;

const HeaderContainer = styled.div`
  align-items: start;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-family: 'Protest Revolution', sans-serif;
  font-weight: 800;
  font-size: 56px;
  text-shadow:
    0 0 5px #959595,
    0 0 10px #959595,
    0 0 15px #959595,
    0 0 20px #959595,
    0 0 25px #959595,
    0 0 30px #959595,
    0 0 35px #959595;
`;

const Underline = styled.div`
  height: 5px;
  width: 12vw;
  background-color: ${BLOG_PAGE_UNDERLINE};
`;

const BlogsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  margin-top: auto;
  padding: 100px;
`;
