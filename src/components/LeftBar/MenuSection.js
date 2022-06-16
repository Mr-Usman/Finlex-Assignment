import * as Styled from "./styles";
import EditPrice from "./EditPrice";

const MenuSection = ({ isBorderRight, Icon }) => {
  return (
    <Styled.SectionWithBorder isBorderRight={isBorderRight}>
      <Styled.MenuTitle size={"14px"}>Lorem Ipsum11</Styled.MenuTitle>
      <EditPrice label={"Lorem Ipsum223"} Icon={Icon} />
    </Styled.SectionWithBorder>
  );
};

export default MenuSection;
