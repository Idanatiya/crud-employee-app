import { mock } from "@/constants";
import TheNavbar from "@/layout/TheNavbar/TheNavbar";
import DepartmentTable from "@/components/DepartmentTable/DepartmentTable";
import * as React from "react";
import Router from "@/routes/Router";
import { Routes, Route } from "react-router-dom";
import DepartmentPage from "./pages/DepartmentPage/DepartmentPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import { defaultId } from "./services/departmentService";
import TheSidebar from "./layout/TheSidebar/TheSidebar";
export const organizations = mock.map(o => ({
  id: o.id,
  name: o.name
}));

// export const defaultSelectedOrganiztion
export const routes = [
  { path: "/", element: DepartmentPage },
  { path: "/employee", element: EmployeePage }
];

export default function App() {
  const [organizationId, setOrganizationId] = React.useState(defaultId);
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(mock));
    localStorage.setItem("organizationId", defaultId.toString());
  }, []);

  const onSelectOrganization = (id: string) => {
    localStorage.setItem("organizationId", id.toString());
    setOrganizationId(id);
  };

  return (
    <section className="root-container">
      <TheNavbar
        organizations={organizations}
        setOrganization={onSelectOrganization}
      />
      <main className="main-content">
        <TheSidebar />
        <section className="route-content">
          <Routes>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={<route.element organizationId={organizationId} />}
              />
            ))}
          </Routes>
        </section>
      </main>
    </section>
  );
}
