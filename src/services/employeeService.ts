import { OrganizationData } from "@/types";
export const employeeService = { getEmployeesByOrganizationId };

//employee []
export function getEmployeesByOrganizationId(id: string) {
  const data: OrganizationData[] = JSON.parse(
    localStorage.getItem("data") as string
  );

  const selectedOrganization = data.find(
    organization => organization.id === id
  );
  if (!selectedOrganization) return [];
  return selectedOrganization?.departments.flatMap(
    department => department.employees
  );
}
