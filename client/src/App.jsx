import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/footer/Footer";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminContacts from "./pages/AdminContacts";
import AdminUsers from "./pages/AdminUsers";
import AdminUpdate from "./pages/AdminUpdate";



const App = ()=>{
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/service" element = {<Service/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/logout" element = {<Logout/>} />
          <Route path="*" element = {<Error/>} />
          {/* //admin */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element = {<AdminUsers/>} />
            <Route path="contacts" element = {<AdminContacts/>} />
            <Route path="users/:id/edit" element = {<AdminUpdate/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
    );
};


export default App;