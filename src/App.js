import './App.css';
import Home from 'containers/Home';
import Admin from 'containers/Admin/Admin';
import { Routes, Route } from 'react-router-dom';
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
            <Route path='/admin' element={<Admin/>}>
                <Route path='admin2' element={<Admin/>} />
            </Route>
        </Routes>

    );
}

export default App;
