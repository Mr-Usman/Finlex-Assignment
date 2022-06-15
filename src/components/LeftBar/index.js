import * as Styled from "./styles";
import { useTheme } from "styled-components";
import { EditIcon } from "../../assets/icons";
import Accordion from "./Accordion";
import MenuSection from "./MenuSection";

const Leftbar = () => {
  const theme = useTheme();
  const { name } = theme;
  return (
    <Styled.Container>
      <Styled.MenuBox>
        <Styled.MenuHeader>
          <Styled.MenuTitle size={"20px"}>Lorem Ipsum</Styled.MenuTitle>
          <Styled.MenuEditIcon>
            <EditIcon />
          </Styled.MenuEditIcon>
        </Styled.MenuHeader>

        <Styled.EditInfoSection>
          <Styled.SubSection1>
            <Styled.MenuTitle size={"14px"}>Lorem Ipsum1</Styled.MenuTitle>
            <Styled.Iconbar>
              <Styled.IconDivision>
                <EditIcon />
              </Styled.IconDivision>
              <Styled.MenuTitle size={"13px"}>Lorem Ipsum2</Styled.MenuTitle>
            </Styled.Iconbar>
          </Styled.SubSection1>

          <MenuSection isBorderRight={false} />
        </Styled.EditInfoSection>

        <Styled.EditInfoSection>
          <MenuSection isBorderRight={true} />
          <MenuSection isBorderRight={false} />
        </Styled.EditInfoSection>
      </Styled.MenuBox>
      <Styled.MenuDetails>
        <Styled.MenuHeader>
          <Styled.MenuTitle size={"20px"}>Lorem Ipsum</Styled.MenuTitle>
          <Styled.MenuEditIcon>
            <EditIcon />
          </Styled.MenuEditIcon>
        </Styled.MenuHeader>
        <Styled.AccordionWrapper>
          <Accordion
            count={8}
            title={"Lorem Ipsum"}
            detailText={"Lorem Ipsum"}
            BoxBgColor={name === "light-theme" ? "#FEFDF5" : "#1C1B13"}
            BoxColor={name === "light-theme" ? "#FBC710" : "#EBBB0E"}
          />
          <Accordion
            count={10}
            title={"Lorem Ipsum"}
            detailText={"Lorem Ipsum"}
            BoxBgColor={name === "light-theme" ? "#FEFAF5" : "#1D1812"}
            BoxColor={name === "light-theme" ? "#EC1515" : "#EC1515"}
          />
          <Accordion
            count={2}
            title={"Lorem Ipsum"}
            detailText={"Lorem Ipsum"}
            BoxBgColor={name === "light-theme" ? "#F4FBF7" : "#131915"}
            BoxColor={name === "light-theme" ? "#1EAF61" : "#1EAF61"}
          />
        </Styled.AccordionWrapper>
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <Styled.MenuBtn>Lorem Ipsum</Styled.MenuBtn>
        </div>
      </Styled.MenuDetails>
    </Styled.Container>
  );
};

export default Leftbar;
