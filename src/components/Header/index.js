import * as Styled from "./styles";

const Header = ({ handleThemeChange }) => {
  return (
    <Styled.Container>
      <Styled.NavText>Lorem Ipsum dolor it amet</Styled.NavText>
      <Styled.HeaderWrapper>
        <Styled.DivWrapper>
          <Styled.CheckBoxWrapper>
            <Styled.CheckBox
              id="checkbox"
              type="checkbox"
              onChange={handleThemeChange}
            />
            <Styled.CheckBoxLabel htmlFor="checkbox" />
          </Styled.CheckBoxWrapper>
        </Styled.DivWrapper>
        <Styled.DivWrapper>
          <Styled.NavBtn1>Lorem Ipsum</Styled.NavBtn1>
        </Styled.DivWrapper>
        <Styled.DivWrapper>
          <Styled.NavBtn2>Lorem Ipsum</Styled.NavBtn2>
        </Styled.DivWrapper>
      </Styled.HeaderWrapper>
    </Styled.Container>
  );
};

export default Header;
