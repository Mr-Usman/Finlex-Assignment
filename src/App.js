import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ListSection from "./components/ListSection";
import TotalPriceCard from "./components/TotalPriceCard";
import { GlobalStyles } from "./styles/Global";
import { light, dark } from "./styles/Theme.styled";
import Leftbar from "./components/LeftBar";
import * as Styled from "./styles";
import Header from "./components/Header";
import ServerResponseData from "./server";

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
        <Styled.ListSection>
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
          <div>
            <Styled.Row>
              {productListData.length > 0 &&
                productListData?.map(({ title, description }, index) => {
                  return (
                    <Styled.Col key={index}>
                      <Styled.Card>
                        <ListSection title={title} description={description} />
                      </Styled.Card>
                    </Styled.Col>
                  );
                })}
            </Styled.Row>
          </div>
        </Styled.ListSection>
      </Styled.BodyWrapper>
    </ThemeProvider>
  );
}

export default App;
