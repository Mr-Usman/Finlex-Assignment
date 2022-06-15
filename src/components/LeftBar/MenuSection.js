import * as Styled from "./styles";
import EditPrice from "./EditPrice";

const MenuSection = ({ isBorderRight }) => {
  return (
    <Styled.SectionWithBorder isBorderRight={isBorderRight}>
      <Styled.MenuTitle size={"14px"}>Lorem Ipsum11</Styled.MenuTitle>
      <EditPrice label={"Lorem Ipsum223"} />
    </Styled.SectionWithBorder>
  );
};

export default MenuSection;
