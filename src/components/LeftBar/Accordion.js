import * as Styled from "./styles";
import { useTheme } from "styled-components";

const Accordion = ({ count, title, detailText, BoxBgColor, BoxColor }) => {
  const theme = useTheme();
  const { name } = theme;
  return (
    <Styled.AccordionStyled>
      <Styled.AccordionSummaryStyled
        expandIcon={
          <Styled.AccodionOpenIcon
            color={name === "light-theme" ? "#A3A3A3" : "#ffffff"}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Styled.TypographyStyled>
          <Styled.AccordionRowWrapper>
            <Styled.AccordionCountLabel bgColor={BoxBgColor} color={BoxColor}>
              {count}
            </Styled.AccordionCountLabel>
            <Styled.AccordionTitle
              color={name === "light-theme" ? "#000000" : "#ffffff"}
            >
              {title}
            </Styled.AccordionTitle>
          </Styled.AccordionRowWrapper>
        </Styled.TypographyStyled>
      </Styled.AccordionSummaryStyled>
      <Styled.AccordionDetailsStyled>
        <Styled.TypographyStyled>{detailText}</Styled.TypographyStyled>
      </Styled.AccordionDetailsStyled>
    </Styled.AccordionStyled>
  );
};

export default Accordion;
