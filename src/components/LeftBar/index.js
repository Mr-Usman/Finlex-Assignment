import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Leftbar = () => {
  return (
    <Styled.Container>
      <Styled.MenuBox>
        <Styled.MenuHeader>
          <Styled.MenuTitle size={"20px"}>Lorem Ipsum</Styled.MenuTitle>
          <Styled.MenuEditIcon>
            <EditIcon />
          </Styled.MenuEditIcon>
        </Styled.MenuHeader>
        <Styled.Section1>
          <Styled.SubSection1>
            <Styled.MenuTitle size={"14px"}>Lorem Ipsum</Styled.MenuTitle>
            <Styled.Iconbar>
              <Styled.IconDivision>
                <EditIcon />
              </Styled.IconDivision>
              <Styled.MenuTitle size={"13px"}>Lorem Ipsum</Styled.MenuTitle>
            </Styled.Iconbar>
          </Styled.SubSection1>

          <Styled.SubSection2>
            <Styled.MenuTitle size={"14px"}>Lorem Ipsum22</Styled.MenuTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Styled.IconGroup>
                <div>
                  <EditIcon />
                </div>
                <div>
                  <Styled.MenuTitle size={"14px"}>Lorem Ipsum</Styled.MenuTitle>
                </div>
              </Styled.IconGroup>
            </div>
          </Styled.SubSection2>
        </Styled.Section1>
        <Styled.Section1>
          <Styled.SubSection1>
            <Styled.MenuTitle size={"14px"}>Lorem Ipsum</Styled.MenuTitle>
            <Styled.IconGroup>
              <div>
                <EditIcon />
              </div>
              <div>
                <Styled.MenuTitle size={"14px"}>Lorem Ipsum</Styled.MenuTitle>
              </div>
            </Styled.IconGroup>
          </Styled.SubSection1>
          <Styled.SubSection2>
            <Styled.MenuTitle size={"14px"}>Lorem Ipsum</Styled.MenuTitle>
            <Styled.IconGroup>
              <div>
                <EditIcon />
              </div>
              <div>
                <Styled.MenuTitle size={"14px"}>Lorem Ipsum</Styled.MenuTitle>
              </div>
            </Styled.IconGroup>
          </Styled.SubSection2>
        </Styled.Section1>
      </Styled.MenuBox>
      <Styled.MenuDetails>
        <Styled.MenuHeader>
          <Styled.MenuTitle size={"20px"}>Lorem Ipsum</Styled.MenuTitle>
          <Styled.MenuEditIcon>
            <EditIcon />
          </Styled.MenuEditIcon>
        </Styled.MenuHeader>
        <div
          style={{
            marginTop: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid black",
          }}
        >
          <Styled.AccordionStyled>
            <Styled.AccordionSummaryStyled
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Styled.TypographyStyled>
                <div style={{ display: "flex" }}>
                  <div>111</div>
                  <div>222</div>
                </div>
              </Styled.TypographyStyled>
            </Styled.AccordionSummaryStyled>
            <Styled.AccordionDetailsStyled>
              <Styled.TypographyStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Styled.TypographyStyled>
            </Styled.AccordionDetailsStyled>
          </Styled.AccordionStyled>
        </div>
        <div style={{ marginTop: "5px" }}>
          <Styled.MenuBtn>Hello</Styled.MenuBtn>
        </div>
      </Styled.MenuDetails>
    </Styled.Container>
  );
};

export default Leftbar;