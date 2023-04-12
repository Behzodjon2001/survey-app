import "./App.css";
import AdminLayout from "./components/AdminLayout";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AdminLayout>
          <Routes>
            <Route path="/" element={<Student />} />{" "}
            <Route path="/admin" element={<Admin />} />{" "}
          </Routes>{" "}
        </AdminLayout>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
