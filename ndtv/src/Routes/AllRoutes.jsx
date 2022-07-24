import { Route, Routes } from "react-router-dom"
import Home from '../Components/Home/Home'

function AllRoutes() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          
        </Routes>
      </div>
    );
  }
  
  export default AllRoutes;