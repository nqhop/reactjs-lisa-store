import './App.css';
import Home from 'containers/Home';
import Admin from 'containers/Admin/Admin';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from 'adminComponents/SlideMenu';
import PageContent from 'adminComponents/PageContent';

import Dashboard from 'containers/Admin/Dashboard';
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
function App() {
    return (
        <Routes>
            <Route path='/' element={
                <div className='wrapper'>
                    <div className="App">
                        <Home />
                    </div>
                </div>
            } />

            {/* <StyledAdmin>
                <div className='sidebar'>
                    <SideMenu />
                </div>
                <div className='main'>
                    <div className='header'>

                    </div>

                    <div className='page-content'>
                        <Route path="/admin" element={<Dashboard />} />
                    </div>
                </div>
            </StyledAdmin> */}


        </Routes>

    );
}

export default App;
