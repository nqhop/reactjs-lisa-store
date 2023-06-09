import styled from "styled-components";
import Input from "antd/es/input/Input";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import threeDotIcon from 'assets/admin/icons/three-dot.svg'
import avatar1 from 'assets/admin/images/avatar.svg'
const StyledHeader = styled.div`
    height: 100px;
    /* background-color: #d7d7a2; */
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        color: #535353;
    }
    .right-header {
        display: flex;
        align-items: center;
        gap: 40px;
    }
`
function AdminHeader() {
    return <StyledHeader>
        <div className="title">Overview</div>
        <div className="search">
            <Input style={{ width: '500px' }} size="large" placeholder="Search" prefix={<SearchOutlined />} />
        </div>
        <div className="right-header">
            <img src={threeDotIcon} alt="" />
            <BellOutlined style={{fontSize:'20px'}}/>
            <img src={avatar1} alt="" />
        </div>
    </StyledHeader>
}

export default AdminHeader;