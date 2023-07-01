import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5f6f7;
  padding-left: 10px;
  border-radius: 7px;
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const ContactNumber = styled.a`
  cursor: pointer;
  color: #1677ff;
  :hover {
    text-decoration: underline;
  }
`;

export const Btn = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
  > svg {
    width: 30px;
    height: 22px;
    fill: #f50505;
  }
  padding: 3px 10px 0 10px;
  margin-left: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #1677ff;
    > svg {
      fill: #fff;
    }
  }
`;

export const BtnEdit = styled.button`
  > svg {
    width: 30px;
    height: 22px;
    fill: #051df5;
  }
  padding: 3px 10px 0 10px;
  margin-left: 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #1677ff;
    > svg {
      fill: #fff;
    }
  }
`;
