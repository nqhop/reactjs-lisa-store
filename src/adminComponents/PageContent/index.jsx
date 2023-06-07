import { Routes, Route } from "react-router-dom";
import Dashboard from "containers/Admin/Dashboard";
function PageContent() {
    return <Routes>
        <Route path="/admin1" element={<Dashboard/>}/>
    </Routes>
}
export default PageContent;