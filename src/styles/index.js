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

const ListBody = Styled.div`
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

const ListPriceWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
`;

const Col = Styled.div`
  float: left;
  width: 20%;
  padding: 0 10px;
`;

const Row = Styled.div`
  margin: 0 -10px;
  &: after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Card = Styled.div`
  padding: 10px 0px;
  text-align: center;
`;

const DivWrapper = Styled.div``;

export {
  BodyWrapper,
  ListBody,
  ListSectionWrapper,
  ListPriceWrapper,
  Col,
  Row,
  Card,
  DivWrapper,
};
