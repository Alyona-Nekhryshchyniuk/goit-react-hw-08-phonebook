import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 50px auto;
  border: 1px solid #142d4c;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 35px;
  width: 440px;
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #142d4c;
  font-weight: 600;

  & svg {
    width: 15px;
    height: 15px;
    fill: ${props => props.color};
  }
`;

export const UserInput = styled.input`
  width: 250px;
  height: 22px;
  margin-left: 18px;
  margin-bottom: 18px;
`;
