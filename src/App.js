import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ListSection from "./components/ListSection";
import TotalPriceCard from "./components/TotalPriceCard";
import { GlobalStyles } from "./styles/Global";
import { light, dark } from "./styles/Theme.styled";
import Leftbar from "./components/LeftBar";
import * as Styled from "./styles";
import Header from "./components/Header";

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
      <Header handleThemeChange={handleThemeChange} />
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
