import {Routes, Route} from "react-router-dom";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <>
    <h1>React Router</h1>
    <Navigation />
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="users" element={<Books/>}/>
      <Route />
    </Routes>
    </>
  );
 };

 export default App;

