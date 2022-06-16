import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
  padding: 15px 30px;
`;

export const NavText = Styled.div`
    font-size: 20px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.NavTextColor};
`;

export const CheckBoxWrapper = Styled.div`
  position: relative;
`;
export const CheckBoxLabel = Styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = Styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const NavBtn1 = Styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid black;
    padding: 5px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.NavBtn1BgColor};
    color: ${({ theme }) => theme.colors.NavBtn1Color};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.NavBtn1Color};
    cursor: pointer;
`;

export const NavBtn2 = Styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid black;
    padding: 5px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.NavBtn2BgColor};
    color: ${({ theme }) => theme.colors.NavBtn2Color};
    border: 0px;
    border-radius: 2px;
    cursor: pointer;
`;

export const HeaderWrapper = Styled.div`
  display: flex;
  flex-direction : 'row';
  width: 20%;
  justify-content: space-between;
  align-items: center;
`;

export const DivWrapper = Styled.div``;
