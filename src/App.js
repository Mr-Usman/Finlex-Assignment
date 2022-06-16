import { useState, useEffect } from "react";
import * as Styled from "./styles";
import { ThemeProvider } from "styled-components";
import TotalPriceCard from "./components/TotalPriceCard";
import { GlobalStyles } from "./styles/Global";
import { light, dark } from "./styles/Theme.styled";
import Leftbar from "./components/LeftBar";
import Header from "./components/Header";
import ServerResponseData from "./server";
import List from "./components/List";

function App() {
  const [productListData, setProductListData] = useState([]);
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
    setProductListData(ServerResponseData);
  }, []);

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
        <Leftbar />
        <Styled.ListBody>
          <Styled.ListPriceWrapper>
            <TotalPriceCard
              price={"0.0000.00,00"}
              title={"lorem ipsum dolor sit"}
            />
            <TotalPriceCard
              price={"0.0000.00,00"}
              title={"lorem ipsum dolor sit"}
            />
          </Styled.ListPriceWrapper>
          <Styled.DivWrapper>
            <Styled.Row>
              <List productListData={productListData} />
            </Styled.Row>
          </Styled.DivWrapper>
        </Styled.ListBody>
      </Styled.BodyWrapper>
    </ThemeProvider>
  );
}

export default App;
