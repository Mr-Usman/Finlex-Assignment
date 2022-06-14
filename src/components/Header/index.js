import * as Styled from "./styles";

const Header = ({ handleThemeChange }) => {
  return (
    <Styled.Container>
      <Styled.NavText>Lorem Ipsum dolor it amet</Styled.NavText>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "20%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Styled.CheckBoxWrapper>
            <Styled.CheckBox
              id="checkbox"
              type="checkbox"
              onChange={handleThemeChange}
            />
            <Styled.CheckBoxLabel htmlFor="checkbox" />
          </Styled.CheckBoxWrapper>
        </div>
        <div>
          <Styled.NavBtn1>Hello ge</Styled.NavBtn1>
        </div>
        <div>
          <Styled.NavBtn2>Hello ge222</Styled.NavBtn2>
        </div>
      </div>
    </Styled.Container>
  );
};

export default Header;
