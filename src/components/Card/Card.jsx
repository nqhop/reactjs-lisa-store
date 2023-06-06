import styled from "styled-components"
import Product from "components/Product/Product"
const StyledCard = styled.div`
    .footer{
        padding: 8px;
        margin-top: -6px;
        .product-name {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
            margin-bottom: 8px;
        }
        .product-catagoty {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-transform: capitalize;

            /* Dark 50 */

            color: rgba(0, 0, 0, 0.5);
        }
        .product-price {
            float: right;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-align: right;
            text-transform: capitalize;
        }
    }
`
const Card = ({ img, name, categoty, price }) => {
    return <StyledCard>
        <Product img={img} />
        <div className="footer">
            <p className="product-name">{name}</p>
            <span className="product-catagoty">{categoty}</span>
            <span className="product-price">${price}</span>
        </div>
    </StyledCard>
}
export default Card;