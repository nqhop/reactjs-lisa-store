import styled from "styled-components"
import '../../App.css';
import filterIcon from 'assets/icons/filter.svg'
import { Button } from "components/Button"
import Product from "components/Product/Product";
import Card from "components/Card/Card";

import producImage1 from 'assets/images/products/image-product.svg'
import producImage2 from 'assets/images/products/image-product-1.svg'
import producImage3 from 'assets/images/products/image-product-2.svg'
import producImage4 from 'assets/images/products/image-product-3.svg'
import producImage5 from 'assets/images/products/image-product-4.svg'
import producImage6 from 'assets/images/products/image-product-5.svg'
import producImage7 from 'assets/images/products/image-product-6.svg'
import producImage8 from 'assets/images/products/image-product-7.svg'
const StyledeAllProduct = styled.div`
    background-color: olive;
    margin-top: 100px;
    .title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 59px;

        text-align: center;
        text-transform: capitalize;
        color: #000000;
    }
    .all-products{
        display: flex;
        justify-content: space-between;
        margin-top: 36px;
    }
    .all-products > div:first-child {
        margin-left: -35px;
    }
    .chose-product{
        padding: 0 35px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.5);
        /* identical to box height */
        text-transform: capitalize;
    }
    .active {
        color: #000;
    }
`
const AllProduct = () => {
    return <StyledeAllProduct>
        <p className="title">Or subscribe to the newsletter</p>
        <div className="all-products">
            <div>
                <span className="chose-product active">all products</span>
                <span className="chose-product">t-shirt</span>
                <span className="chose-product">hoodies</span>
                <span className="chose-product">jacket</span>
            </div>
            <Button icon={filterIcon} bgColor='#000' borderRadius='0' textColor='#fff' width='100px' height='32px'>Filter</Button>
        </div>
        <div className="row">
            <div className="col col-quarter">
                <Card img={producImage1} price='63.85' categoty='dress' name='Adicolor Classics Joggers'/>
            </div>
            <div className="col col-quarter">
                <Product img={producImage1} />
            </div>
            <div className="col col-quarter">
                <Product img={producImage1} />
            </div>
            <div className="col col-quarter">
                <Product img={producImage1} />
            </div>
        </div>

    </StyledeAllProduct>
}
export default AllProduct;