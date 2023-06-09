import styled from "styled-components"
import { MyColumnChart } from "adminComponents/Charts/MyColumnChart";
import { Card, Progress } from "antd";
import MyCircle from "adminComponents/Charts/MyCircle";
import G10Icon from 'assets/admin/icons/g-10.svg'
import TopProducts from "adminComponents/TopProducts/TopProducts";
const StyledDashboard = styled.div`
    .row {
        display: flex;
    }
    .column-chart {
        width: 66.66%;
        margin-right: 16px;
        .column-chart-title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;

            color: #A7A7A7;
        }
        .column-chart-total {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 42px;
        }
    }
    .overview,
    .circle-chart {
        width: 33.33%;
        .overview-header,
        .circle-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .overview-title p:first-child,
        .circle-title p:first-child {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 35px;

            color: #535353;
        }
        .p:first-child p:last-child,
        .circle-title p:last-child {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;

            color: #A7A7A7;
        }
        .circle-row {
            display: flex;
            margin-top: 30px;
            .circle-chart-item {
                width: 50%;
            }
            .circle-chart-name {
                display: flex;
                justify-content: center;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 16px;
                color: #A7A7A7;
            }
        }
    }
    .top-products {
        width: 66.66%;
        margin-right: 16px;
        margin-top: 16px;
    }
    .overview {
        margin-top: 16px;
    }
    .overview-progress {
        margin-top: 30px;
        .overview-progress-title{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;

            color: #535353;
        }
    }

`

function Dashboard() {
    return <StyledDashboard>
        <div className="row">
            <div className="column-chart">
                <Card style={{ height: '100%' }}>
                    <p className="column-chart-title">Total Revenue</p>
                    <p className="column-chart-total">$980,273.00</p>
                    <MyColumnChart />
                </Card>

            </div>
            <div className="circle-chart">
                <Card>
                    <div className="circle-header">

                        <div className="circle-title">
                            <p>Customers</p>
                            <p>Information About your Customers</p>
                        </div>
                        <img src={G10Icon} />
                    </div>
                    <div className="circle-row">
                        <div className="circle-chart-item">
                            <MyCircle progress={85} textColor='#5F27CD' progressColor='#5F27CD' />
                            <p className="circle-chart-name">Current Customers</p>
                        </div>
                        <div className="circle-chart-item">
                            <MyCircle progress={66} textColor='hotpink' progressColor='hotpink' />
                            <p className="circle-chart-name">New Customers</p>

                        </div>
                    </div>
                    <div className="circle-row">
                        <div className="circle-chart-item">
                            <MyCircle progress={90} textColor='cornflowerblue' progressColor='cornflowerblue' />
                            <p className="circle-chart-name">Target Customers</p>
                        </div>
                        <div className="circle-chart-item">
                            <MyCircle progress={90} textColor='#FF8918' progressColor='#FF8918' />
                            <p className="circle-chart-name">Retarget Customers</p>
                        </div>

                    </div>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="top-products">
                <TopProducts />
            </div>
            <div className="overview">
                <Card>
                    <div className="overview-header">

                        <div className="overview-title">
                            <p>Stats Overview</p>
                            <p>Information about store visits</p>
                        </div>
                        <img src={G10Icon} />
                    </div>

                    <div className="overview-progress">
                        <p className="overview-progress-title">Women</p>
                        <Progress percent={63} status="active" strokeColor='hotpink'/>
                        <p className="overview-progress-title">Men</p>
                        <Progress percent={88} status="active" strokeColor='cornflowerblue'/>
                        <p className="overview-progress-title">Kids</p>
                        <Progress percent={38} status="active" strokeColor='#5F27CD'/>
                    </div>
                </Card>
            </div>
        </div>
    </StyledDashboard>
}

export default Dashboard;