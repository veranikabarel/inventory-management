import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import HardwareInUse from "./HardwareInUse";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hardware-in-use" element={<HardwareInUse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
