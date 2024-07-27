import { Route, Routes } from "react-router-dom";
import ShoeStore from "./component/ShoeStore";
import ChiTietGiay from "./component/ChiTietGiay";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";

function App() {
 
  return (
    <>
      <Routes>
        
        
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<ShoeStore />} />
          <Route path="/chi-tiet-giay/:id" element={<ChiTietGiay />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
