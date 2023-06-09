import './App.css';
import Home from 'containers/Home';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';


import SideMenu from 'adminComponents/SlideMenu';
import AdminHeader from 'adminComponents/AdminHeader/AdminHeader';
import Dashboard from 'containers/Admin/Dashboard';

const StyledAdmin = styled.div`
    display: flex;
    background-color: #b8dfdf;
    .sidebar {
        /* height: 100vh; */
        width: 200px;
        background-color: #fff;
    }
    .main {
        /* height: 100vh; */
        flex: 1;
        /* background-color: #b8dfdf; */
        max-width: 1300px;
        margin: 0 auto;
    }
    .page-content {
        padding: 30px 50px;
    }
`
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <div className='wrapper'>
                        <div className="App">
                            <Home />
                        </div>
                    </div>
                } />
            </Routes>


            <StyledAdmin>
                <div className='sidebar'>
                    <SideMenu />
                </div>
                <div className='main'>
                    <AdminHeader />

                    <div className='page-content'>
                        <Routes>
                            <Route path="/admin" element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>
            </StyledAdmin>



        </>
    );
}

export default App;
