import Styled from "styled-components";

const BodyWrapper = Styled.div`
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    grid-gap: 24px;
    margin-bottom: 24px;
    padding: 0px 30px;
    
    @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    }
`;

const LeftBar = Styled.div`
    display: flex;
`;

const ListSection = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    height: auto;
    margin-left: 12px;
`;

const ListSectionWrapper = Styled.div`
    margin-top: 10px;
    display: flex;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
`;

export { BodyWrapper, LeftBar, ListSection, ListSectionWrapper };
