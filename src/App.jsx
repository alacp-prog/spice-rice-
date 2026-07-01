import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from './Layout/ZPublic/PublicLayout';



// Pages

// Public pages
import Homme from './Page/ZPublic/Homme';


function App() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<PublicLayout/>}>
                <Route index element={<Homme/>} />
                
                
            </Route>


          </Routes>
        </Router>
    );
}

export default App;
