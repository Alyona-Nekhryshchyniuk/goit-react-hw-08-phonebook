import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;

    & > svg {
      width: 27 px;
      height: 27px;
      padding: 0 10px;
    }
  }
`;

export const Contact = styled.div`
  padding-right: 15px;
`;
