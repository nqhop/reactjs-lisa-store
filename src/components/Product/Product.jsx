import styled from "styled-components"
const StyledProduct = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    .wrapper {
        padding: 8px;
        img {
            width: 100%;
            /* height: 100%; */
        }
    }
    .product{
        position: relative;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.25s linear;
    }
    .sale{
        width: 52px;
        height: 24px;
        background-color: #1E2832;
        color: #fff;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        position: absolute;
        top: 60px;
        padding: 4px 12px;
    }
    .product-info{
        position: absolute;
        background-color: #1E2832;
        left: 0;
        right: 0;
        height: 55px;
        bottom: 4px;
        padding: 12px;
        color: #fff;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &:hover .product{
        visibility: visible;
        opacity: 1;
        
    }
`
const Product = ({ img, width, height, name, quantity, sale }) => {
    return <StyledProduct
        width={width}
        height={height}
    >
        <div className="wrapper">
            <img src={img} alt="" />
            {sale ? <div className="sale">sale</div> : '' }
            
            <div className="product">
                <div className="product-info">
                    <p>{name}</p>
                    <div>
                        <span style={{ marginRight: '6px' }}>{quantity}</span>
                        <span>Product</span>
                    </div>
                </div>

            </div>
        </div>
    </StyledProduct>
}
export default Product;