import styled from "styled-components"
import Product from "components/Product/Product"
const StyledCard = styled.div`
    .footer{
        padding: 8px;
        margin-top: -8px;
        .product-name {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-transform: capitalize;
        }
    }
`
const Card = ({ img, name, categoty, price }) => {
    return <StyledCard>
        <Product img={img} />
        <div className="footer">

            <p className="product-name">{name}</p>
            <span>{categoty}</span>
            <span>${price}</span>
        </div>
    </StyledCard>
}
export default Card;