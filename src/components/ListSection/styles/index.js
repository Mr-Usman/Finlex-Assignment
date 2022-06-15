import Styled from "styled-components";

const ListCard = Styled.div`
    border: 1px solid #ccc;
    height: auto;
    background-color: ${({ theme }) => theme.colors.BoxBgColor};
    color: ${({ theme }) => theme.colors.text};
    overflow: hidden;
    text-align: left;
`;

const ListItemButton = Styled.button`
    margin-top: 10px;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.colors.ListBtnBgColor};
    fill: ${({ theme }) => theme.colors.ListBtnIconColor};
    width: 45px;
    height: 45px;
    border: 0px;
    cursor: pointer;
    border-radius: 2px;
    &: hover {
        background-color: ${({ theme }) => theme.colors.ListBtnBgColorHover};
        color: ${({ theme }) => theme.colors.ListBtnIconColor};
    }
    svg {
        width: 20px;
        height: 20px;
    }
`;

const Title = Styled.div`
    margin-top: 12px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.ListTitleColor};
    margin-left: 10px;
`;

const Description = Styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.ListDescriptionColor};
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 15px 0px;
`;

export { ListCard, ListItemButton, Title, Description };
