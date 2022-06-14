import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ListSection from "./components/ListSection";
import TotalPriceCard from "./components/TotalPriceCard";
import { GlobalStyles } from "./styles/Global";
import { light, dark } from "./styles/Theme.styled";
import Leftbar from "./components/LeftBar";
import * as Styled from "./styles";

function App() {
  const [themeType, setThemeType] = useState("LIGHT");
  const [theme, setTheme] = useState(light);

  const handleThemeChange = () => {
    setThemeType(() => {
      if (themeType === "LIGHT") {
        return "DARK";
      }
      return "LIGHT";
    });
  };

  useEffect(() => {
    if (themeType === "LIGHT") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [themeType]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
      <Styled.BodyWrapper>
        <Styled.LeftBar>
          <Leftbar />
        </Styled.LeftBar>
        <Styled.ListSection>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TotalPriceCard
              price={"0.0000.00,00"}
              title={"lorem ipsum dolor sit"}
            />
            <TotalPriceCard
              price={"0.0000.00,00"}
              title={"lorem ipsum dolor sit"}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              marginBottom: "auto",
            }}
          >
            <Styled.ListSectionWrapper>
              <ListSection />
              <ListSection />
              <ListSection />
              <ListSection />
              <ListSection />
            </Styled.ListSectionWrapper>
            <Styled.ListSectionWrapper>
              <ListSection />
              <ListSection />
              <ListSection />
              <ListSection />
              <ListSection />
            </Styled.ListSectionWrapper>
          </div>
        </Styled.ListSection>
      </Styled.BodyWrapper>
    </ThemeProvider>
  );
}

export default App;
