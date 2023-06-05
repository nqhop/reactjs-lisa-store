import styled from "styled-components"
import filterIcon from 'assets/icons/filter.svg'
import { Button } from "components/Button"
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
`
const AllProduct = () => {
    return <StyledeAllProduct>
        <p className="title">Or subscribe to the newsletter</p>
        <div className="all-products">
            <div>
                <span>all products</span>
                <span>t-shirt</span>
                <span>hoodies</span>
                <span>jacket</span>
            </div>
            <Button icon={filterIcon} bgColor='#000' borderRadius='0' textColor='#fff' width='95px' height='32px'>Filter</Button>
        </div>

    </StyledeAllProduct>
}
export default AllProduct;