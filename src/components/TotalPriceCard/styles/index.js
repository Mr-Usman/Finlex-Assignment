import Styled from "styled-components";

const PriceCard = Styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.BoxBgColor};
    width: 49%;
    height: 70px;
    border: 1px solid #ccc;
    padding: 10px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.text};
`;

const PriceLabel = Styled.div`
    margin: 2px 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.ItemPriceColor};
`;

const PriceDescription = Styled.div`
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.ItemPriceDescriptionColor};
`;

const CurrencyEditIcon = Styled.div`
    svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.MenuIconColor};
    }
`;

export { PriceCard, PriceLabel, PriceDescription, CurrencyEditIcon };
