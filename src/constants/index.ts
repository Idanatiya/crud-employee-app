import DepartmentPage from "@/pages/DepartmentPage/DepartmentPage";
import EmployeePage from "@/pages/EmployeePage/EmployeePage";
import { Department } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const defaultOrganizationId = "5d366f1a-6161-4144-85e0-15f67fd74211";

export const DEPARTMENTS_DB_STORAGE_KEY = "departmentsDB";

export const routes = [
  { path: "/", element: DepartmentPage },
  { path: "/employee", element: EmployeePage }
];

export const ORGANIZATION_NAV_LINKS = [
  { id: "5d366f1a-6161-4144-85e0-15f67fd74211", name: "Google" },
  { id: "4814b199-dfd8-4e41-aa12-30a4cf542bf6", name: "Microsoft" }
];

export const mockData: Department[] = [
  {
    organizationId: "5d366f1a-6161-4144-85e0-15f67fd74211",
    id: uuidv4(),
    name: "R&D",
    employees: [
      {
        name: "Idan",
        id: uuidv4()
      },
      {
        name: "Mor",
        id: uuidv4()
      }
    ]
  },
  {
    organizationId: "5d366f1a-6161-4144-85e0-15f67fd74211",
    id: uuidv4(),
    name: "Product",
    employees: [
      {
        name: "Eldar",
        id: uuidv4()
      },
      {
        name: "Michael",
        id: uuidv4()
      }
    ]
  },
  {
    organizationId: "4814b199-dfd8-4e41-aa12-30a4cf542bf6",
    id: uuidv4(),
    name: "UX",
    employees: [
      {
        name: "Yedidya",
        id: uuidv4()
      },
      {
        name: "Bar",
        id: uuidv4()
      }
    ]
  },
  {
    organizationId: "5d366f1a-6161-4144-85e0-15f67fd74211",
    id: uuidv4(),
    name: "QA",
    employees: [
      {
        name: "Gal",
        id: uuidv4()
      },
      {
        name: "Avi",
        id: uuidv4()
      }
    ]
  },
  {
    organizationId: "4814b199-dfd8-4e41-aa12-30a4cf542bf6",
    id: uuidv4(),
    name: "R&D",
    employees: [
      {
        name: "Noam",
        id: uuidv4()
      },
      {
        name: "Galit",
        id: uuidv4()
      }
    ]
  },
  {
    organizationId: "4814b199-dfd8-4e41-aa12-30a4cf542bf6",
    id: uuidv4(),
    name: "UX",
    employees: [
      {
        name: "Jack",
        id: uuidv4()
      },
      {
        name: "Julie",
        id: uuidv4()
      }
    ]
  }
];
