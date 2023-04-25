import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Inwards from "./Components/Inwards/Inwards";
import Godowns from "./Components/Godowns/Godowns";
import Returns from "./Components/Returns/Returns";
import Sidebar from "./Components/sidebar/Sidebar";

const App = () => {
  return (
    // <>
    //  <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />

    //    <Route path="/home" element={<Home />}></Route>
    //   </Routes>
    // </Router>

    // </>
    <>
  
    <Router>
     

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Godowns" element={<Godowns />} /> {/* Route for Godowns component */}
        <Route path="/Inwards"element={<Inwards/>} />
        <Route path="/Inwards"element={<Returns/>} />

        {/* Add other routes */}
      </Routes>
    </Router>
  </>
  );
};

export default App;
// return (
//   <Router basename={"/"}> {/* Specify the basename prop */}
//     <div style={{ display: "flex", height: "100vh" }}>
//       <Sidebar />
//       <div style={{ flex: 1, overflowY: "auto" }}>
//         {/* Use 'flex' to occupy remaining space */}
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/Godowns" element={<Godowns />} /> {/* Route for Godowns component */}
//           <Route path="/Inwards" element={<Inwards />} />
//           <Route path="/Inwards" element={<Returns />} />
//           {/* Add other routes */}
//         </Routes>
//       </div>
//     </div>
//   </Router>
// );
// };

// export default App;






