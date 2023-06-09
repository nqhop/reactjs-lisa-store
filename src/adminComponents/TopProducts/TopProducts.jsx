import styled from "styled-components"
import { Card } from "antd"
import { UserOutlined, ShoppingCartOutlined, MedicineBoxOutlined, CheckCircleOutlined } from "@ant-design/icons"
import CardProduct from "adminComponents/CardProduct/CardProduct";

import TopProductImage1 from 'assets/admin/images/top-products/image-1.svg'
import TopProductImage2 from 'assets/admin/images/top-products/image-2.svg'

const StyledTopProducts = styled.div`
    .top-products-select {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .top-products-title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #535353;
        margin-top: 23px;
    }

`
const StyledSelectIag = styled.div`
    width: 130px;
    height: 80px;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    border-radius: 10px;
    div {
        margin-left: 8px;
    }
    .title,
    .number{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 15px;

        color: #7B7878;
    }
`
const SelectIag = ({ icon, title, number }) => {
    return <StyledSelectIag>
        {icon}
        <div>
            <p className="title">{title}</p>
            <p className="number">{number}</p>
        </div>
    </StyledSelectIag>
}

function TopProducts() {
    return <StyledTopProducts>
        <Card>
            <div className="top-products-select">
                <SelectIag icon={<UserOutlined style={{ color: "#FFB402", fontSize: '20px' }} />} title='Total Visits' number='10.8m' />
                <SelectIag icon={<ShoppingCartOutlined style={{ color: "#5F27CD", fontSize: '20px' }} />} title='Total Sales' number='100,34' />
                <SelectIag icon={<MedicineBoxOutlined style={{ color: "hotpink", fontSize: '20px' }} />} title='Total Made' number='$200k' />
                <SelectIag icon={<CheckCircleOutlined style={{ color: "cornflowerblue", fontSize: '20px' }} />} title='Orders Completed' number='90,352' />
            </div>
            <p className="top-products-title">Top Products</p>
            <CardProduct image={TopProductImage1} name='Nike Sportswear Futura Luxe' color='Pink' ordered={50} inventory='700' sale='$1,000.60' price='$1,300.92' today='$17,000.92'/>
            <CardProduct image={TopProductImage2} name='Basic dress' color='Green' ordered={25} inventory='200' sale='$1,200.60' price='$1,500.92' today='$12,100.92'/>
        </Card>
    </StyledTopProducts>
}

export default TopProducts;