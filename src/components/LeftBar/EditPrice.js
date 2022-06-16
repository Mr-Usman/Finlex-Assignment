import * as Styled from "./styles";

const EditPrice = ({ label, Icon }) => {
  return (
    <div>
      <Styled.IconGroup>
        <Styled.EditPriceIcon>
          <Icon />
        </Styled.EditPriceIcon>
        <Styled.DivWrapper>
          <Styled.MenuTitle size={"14px"}>{label}</Styled.MenuTitle>
        </Styled.DivWrapper>
      </Styled.IconGroup>
    </div>
  );
};

export default EditPrice;
