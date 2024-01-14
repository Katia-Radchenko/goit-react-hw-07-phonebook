import styled from '@emotion/styled';
export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 10px 20px 10px 20px;
`;

export const Text = styled.span`
      font-weight: bold;

`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 35px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  background-color: dodgerblue;
  border: none;
  margin-left: 20px;

  &:hover{
    background-color: blue;
  }

`;
