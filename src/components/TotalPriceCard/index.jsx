import * as Styled from "./styles";

const TotalPriceCard = ({ price, title }) => {
  return (
    <Styled.PriceCard>
      <Styled.PriceLabel>{price}</Styled.PriceLabel>
      <Styled.PriceDescription>{title}</Styled.PriceDescription>
    </Styled.PriceCard>
  );
};

export default TotalPriceCard;
