import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

 function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Layout/>}>
         <Route index element={ <Dashboard/>} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;