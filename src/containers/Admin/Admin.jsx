import styled from 'styled-components';
import SideMenu from 'adminComponents/SlideMenu';
import PageContent from 'adminComponents/PageContent';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
const StyledAdmin = styled.div`
    display: flex;
    .sidebar {
        height: 100vh;
        width: 200px;
        background-color: #ddd;
    }
    .main {
        height: 100vh;
        flex: 1;
        background-color: #b8dfdf;
    }
    .header {
        height: 100px;
        background-color: #d7d7a2;
    }
`
const Admin = () => {
    return <StyledAdmin>
        <div className='sidebar'>
            <SideMenu/>
        </div>
        <div className='main'>
            <div className='header'>

            </div>

            <div className='page-content'>
                {/* <PageContent/> */}
                <Route path="/admin" element={<Dashboard/>}/>
            </div>
        </div>
    </StyledAdmin>
}
export default Admin;