import styled from '@emotion/styled';
import { FC } from 'react';

interface BaseDivWrapperProps {
  children?: React.ReactElement;
}

export const BaseDivWrapper: FC<BaseDivWrapperProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export const BaseWrapper: FC<BaseDivWrapperProps> = ({ children }) => {
  return <BaseDiv>{children}</BaseDiv>;
};

const StyledDiv = styled.div`
  display: flex;
  background-color: #381e49;
  width: 100vw;
  height: 100vh;
`;

const BaseDiv = styled.div`
  display: flex;
  padding: 22px;
  margin: 22px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: gray;
`;