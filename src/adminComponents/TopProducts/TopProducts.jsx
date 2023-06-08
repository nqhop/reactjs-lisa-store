import styled from "styled-components"
import { Card } from "antd"
import { UserOutlined } from "@ant-design/icons"
const StyledTopProducts = styled.div``
const StyledSelectIag = styled.div`
    width: 130px;
    height: 80px;
    background-color: #eee;
`
const SelectIag = ({icon, title, number}) => {
    return <StyledSelectIag>
        <img src={icon} alt="" />
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
                <SelectIag icon={<UserOutlined/>} title='Total Visits' number='10.8m'/>
            </div>
        </Card>
    </StyledTopProducts>
}

export default TopProducts;