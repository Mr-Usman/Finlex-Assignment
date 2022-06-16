import * as Styled from "./styles";
import { CurrencyIcon } from "../../assets/icons";

const TotalPriceCard = ({ price, title }) => {
  return (
    <Styled.PriceCard>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Styled.CurrencyEditIcon>
          <CurrencyIcon />
        </Styled.CurrencyEditIcon>
        <Styled.PriceLabel>{price}</Styled.PriceLabel>
      </div>
      <Styled.PriceDescription>{title}</Styled.PriceDescription>
    </Styled.PriceCard>
  );
};

export default TotalPriceCard;
