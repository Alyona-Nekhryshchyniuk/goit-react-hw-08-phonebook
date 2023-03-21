import styled from '@emotion/styled';
export const Button = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  height: 36px;
  color: #ffee7d;
  border: 1px solid #ececec;
  background-color: #385170;
  border-radius: 5px;
  font-weight: bold;
  font-size: 17px;

  &[disabled] {
    background-color: #9fb2c9;
    color: #fff3a8;
  }

  & svg {
    margin-right: 7px;
  }
`;
