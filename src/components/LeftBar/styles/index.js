import Styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export const Container = Styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
`;

export const MenuBox = Styled.div`
    height: 175px;
    background-color: ${({ theme }) => theme.colors.BoxBgColor};
    border: 1px solid #D1D1D1;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const MenuDetails = Styled.div`
    height: auto;
    border: 1px solid black;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.BoxBgColor};
    overflow: hidden;
`;

export const MenuHeader = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 3px;
    margin-right: 3px;
    border-bottom: 1px solid #A3A3A3;
    padding-bottom: 5px;
`;

export const Section1 = Styled.div`
    width: 100%;
    display: flex;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #A3A3A3;
    margin-top: 8px;
    padding-bottom: 5px;
`;

export const SubSection1 = Styled.div`
    width: 50%;
    border-right: 1px solid #A3A3A3;
`;

export const SubSection2 = Styled.div`
    width: 50%;
    padding-left: 10px;
`;

export const MenuTitle = Styled.p`
    color: ${({ theme }) => theme.colors.MenuTitleColor};
    font-size: ${(props) => props.size};
`;

export const MenuEditIcon = Styled.div`
    svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.MenuIconColor};
    }
`;

export const Iconbar = Styled.div`
    width: 85%;
    border: 1px solid #A3A3A3;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    margin-top:5px;
`;

export const IconDivision = Styled.div`
    width: 25px;
    height: 20px;
    margin-left: -1px;
    background-color: red;
    margin-right: 4px;
    display: inline;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    svg {
        width: 25px;
        height: 20px;
        fill: #fff;
    }
`;

export const IconGroup = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
    margin-left: -2px;
    margin-top: 4px;
`;

export const MenuBtn = Styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid black;
    padding: 5px;
    padding-left: 10px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.NavBtn2BgColor};
    color: ${({ theme }) => theme.colors.NavBtn2Color};
    border: 0px;
    border-radius: 2px;
    cursor: pointer;
    text-align: left;
`;

export const AccordionStyled = Styled(Accordion)`
    &.css-1elwnq4-MuiPaper-root-MuiAccordion-root {
        box-shadow: none !important;
    }
    &.css-1elwnq4-MuiPaper-root-MuiAccordion-root.Mui-expanded {
        margin: 0px !important;
    }
`;

export const AccordionSummaryStyled = Styled(AccordionSummary)``;
export const AccordionDetailsStyled = Styled(AccordionDetails)`
    &.css-15v22id-MuiAccordionDetails-root {
        padding: 8px 56px 16px !important;
    }
`;
export const TypographyStyled = Styled(Typography)``;
