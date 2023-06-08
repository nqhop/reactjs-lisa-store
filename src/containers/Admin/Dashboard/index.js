import styled from "styled-components"
import { MyColumnChart } from "adminComponents/Charts/MyColumnChart";
import { Card } from "antd";
import { MyPieChart } from "adminComponents/Charts/MyPieChart";
import G10Icon from 'assets/admin/icons/g-10.svg'
import TopProducts from "adminComponents/TopProducts/TopProducts";
const StyledDashboard = styled.div`
    .row {
        display: flex;
    }
    .column-chart {
        width: 66.66%;
    }
    .pie-chart {
        width: 33.33%;
        .pie-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .pie-title p:first-child {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 35px;

            color: #535353;
        }
        .pie-title p:last-child {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;

            color: #A7A7A7;
        }
        .pie-row {
            display: flex;
            .pie-chart-item {
                width: 50%;
            }
        }
    }
    .top-products {
        width: 66.66%;
    }
`

function Dashboard() {
    return <StyledDashboard>
        <div className="row">
            <div className="column-chart">
                <Card style={{ marginRight: '16px' }}>
                    <MyColumnChart />
                </Card>

            </div>
            <div className="pie-chart">
                <Card>
                    <div className="pie-header">

                        <div className="pie-title">
                            <p>Customers</p>
                            <p>Information About your Customers</p>
                        </div>
                        <img src={G10Icon} />
                    </div>
                    <div className="pie-row">
                        <div className="pie-chart-item">
                            <MyPieChart />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="top-products">
                {/* <Card style={{ marginRight: '16px' }}>
                </Card> */}
                <TopProducts/>
            </div>
        </div>
    </StyledDashboard>
}

export default Dashboard;