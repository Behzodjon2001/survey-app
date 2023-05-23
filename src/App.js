import Admin from "./pages/admin/Admin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Finished, Login, Student } from "./pages/front";
import { FrontLayout } from "./components/layout";
import AdminLayouts from "./components/layout/admin";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { TOKEN } from "./const";

function App() {
  const frontRoutes = [
    {
      url: "",
      page: Student,
    },
    {
      url: "login",
      page: Login,
    },
    {
      url: "finished",
      page: Finished,
    },
  ];
  const adminRoutes = [
    {
      url: "admin",
      page: Admin,
    },
  ];
  const token = localStorage.getItem(TOKEN);
  return (
    <div className="App">
      <Router>
        <ToastContainer autoClose={1000} />{" "}
        <Routes>
          {" "}
          {frontRoutes.map(({ url, page: Page }) => (
            <Route
              key={url}
              path={"/" + url}
              element={
                <FrontLayout>
                  <Page />
                </FrontLayout>
              }
            >
              {" "}
            </Route>
          ))}{" "}
          {token &&
            adminRoutes.map(({ url, page: Page }) => (
              <Route
                key={url}
                path={"/" + url}
                element={
                  <AdminLayouts>
                    <Page />
                  </AdminLayouts>
                }
              >
                {" "}
              </Route>
            ))}{" "}
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
