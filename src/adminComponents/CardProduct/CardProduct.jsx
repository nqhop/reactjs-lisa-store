import styled from "styled-components";
const StyledCardProduct = styled.div`
    background: #E5E5E5;
    padding: 13px;
    border-radius: 10px;
    display: flex;
    margin-top: 16px;
    &::after{
        content: '';
        display: block;
        clear: both;
    }
    /* justify-content: space-between; */
    .product {
        display: flex;
        width: 300px;
        img {
            margin-right: 2px;
        }
    }
    .name {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
    }
    .color,
    .order {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        color: #7B7878;
    }
    .product-info {
        display: flex;
        flex: 1;
        justify-content: space-between;
    }
    .product-info-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .product-info-col-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #7B7878;
    }
    .product-info-col-number {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
    }
`
function CardProduct({ image, name, color, ordered, inventory, sale, price, today }) {
    return <StyledCardProduct>
        <div className="product">
            <img src={image} />
            <div className="product-name-color-orded">
                <p className="name">{name}</p>
                <span className="color">{color} - </span>
                <span className="order">{ordered} orders</span>
            </div>
        </div>
        <div className="product-info">
            <div className="product-info-col">
                <p className="product-info-col-title">Inventory</p>
                <p className="product-info-col-number">{inventory}</p>
            </div>

            <div className="product-info-col">
                <p className="product-info-col-title">Sale</p>
                <p className="product-info-col-number">{sale}</p>
            </div>

            <div className="product-info-col">
                <p className="product-info-col-title">Price</p>
                <p className="product-info-col-number">{price}</p>
            </div>

            <div className="product-info-col">
                <p className="product-info-col-title">Today</p>
                <p className="product-info-col-number">{today}</p>
            </div>
        </div>
    </StyledCardProduct>
}
export default CardProduct;