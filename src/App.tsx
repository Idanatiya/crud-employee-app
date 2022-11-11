import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";

import { defaultOrganizationId, routes } from "@/constants";
import TheNavbar from "@/layout/TheNavbar/TheNavbar";

import TheSidebar from "./layout/TheSidebar/TheSidebar";
import { departmentService } from "./services/departmentService";

export default function App() {
  const [organizationId, setOrganizationId] = React.useState(
    defaultOrganizationId
  );
  React.useEffect(() => {
    departmentService.initializeState();
  }, [organizationId]);

  const onSelectOrganization = (id: string) => {
    toast("Organization has been changed!");
    localStorage.setItem("organizationId", id);
    setOrganizationId(id);
  };

  return (
    <section className="root-container">
      <TheNavbar setOrganization={onSelectOrganization} />
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
