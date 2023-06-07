import {DashboardOutlined, AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, SmileOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom";
const StyledSideMenu = styled.div`
    .title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 40px;
        color: #1E2832;

        margin-top: 25px;
        text-align: center;
    }
    .menu{
        margin-top: 100px;
        font-size: 20px;
    }
    .icon {
        font-size: 20px !important;
    }
    .ant-menu-item {
        height: 60px;
        margin-left: 10px;
    }
    
`
function SideMenu() {
    const navigate = useNavigate();
    return <StyledSideMenu>
        <p className="title">Lisa Admin</p>
        <Menu
            className="menu"
            onClick={(item)=>{
                navigate(item.key);
            }}
            items={[
                {
                    label: 'Dashboard',
                    icon: <DashboardOutlined className="icon"/>,
                    key: '/admin'
                },
                {
                    label: 'Products',
                    icon: <AppstoreAddOutlined className="icon"/>,
                    key: '/admin/products'
                },
                {
                    label: 'Customers',
                    icon: <UserOutlined className="icon"/>,
                    key: '/admin/customers'
                },
                {
                    label: 'Orders',
                    icon: <ShoppingCartOutlined className="icon"/>,
                    key: '/admin/orders'
                },
                {
                    label: 'Shipments',
                    icon: <SmileOutlined className="icon"/>,
                    key: '/admin/shipments'
                },
                {
                    label: 'Transactions',
                    icon: <ShopOutlined className="icon"/>,
                    key: '/transactions'
                },
                {
                    label: 'Settings',
                    icon: <SettingOutlined className="icon"/>,
                    key: '/admin/settings'
                },
                {
                    label: 'Logout',
                    icon: <LogoutOutlined className="icon"/>,
                    key: '/logout'
                },
            ]} />
    </StyledSideMenu>
}
export default SideMenu;