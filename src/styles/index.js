import Styled from "styled-components";

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
  padding: 15px 30px;
`;

const NavText = Styled.div`
    font-size: 20px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.NavTextColor};
`;

const NavBtn1 = Styled.button`
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

const NavBtn2 = Styled.button`
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

const BodyWrapper = Styled.div`
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    grid-gap: 24px;
    margin-bottom: 24px;
    padding: 0px 30px;
    
    @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    }
`;

const LeftBar = Styled.div`
    display: flex;
`;

const ListSection = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    height: auto;
    margin-left: 12px;
`;

const ListSectionWrapper = Styled.div`
    margin-top: 10px;
    display: flex;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
`;

const CheckBoxWrapper = Styled.div`
  position: relative;
`;
const CheckBoxLabel = Styled.label`
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
const CheckBox = Styled.input`
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

export {
  Container,
  BodyWrapper,
  LeftBar,
  ListSection,
  ListSectionWrapper,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  NavBtn1,
  NavBtn2,
  NavText,
};
