import { Department, Employee, OrganizationData } from "@/types";

import { storageService } from "./storageService";

export const defaultId = "5d366f1a-6161-4144-85e0-15f67fd74211";

// function deleteDepartmentById(id: string) {
//   const data: Departments = storageService.loadFromStorage("data");

//   const filteredDepartments = data.departments.filter(
//     department => department.id !== id
//   );
//   storageService.saveToStorage("data", filteredDepartments);
// }

function getDepartmentsById(id: string) {
  const data: OrganizationData[] = JSON.parse(
    localStorage.getItem("data") as string
  );
  const departments = data.find(
    organization => organization.id === id
  )?.departments;
  if (!departments) return [];
  //   const departments = data.
  return departments;
}

function setDepartments(departments: Department[]) {
  console.log({ departments });
  const currOrganiztionId = storageService.loadFromStorage("organizationId");
  const data: OrganizationData[] = JSON.parse(
    localStorage.getItem("data") as string
  );

  console.log({ data });

  //   const idx = data.findIndex(item => item.id === currOrganiztionId);
  //   data[idx].departments = departments;
  //   console.log({ data });

  //   storageService.saveToStorage("data", data);
}

function addEmployeeToDepartment(
  employee: Employee,
  departmentId: string,
  organizationId: string
) {
  //Get org data
  //Find organization
  //add the employee
  const data: OrganizationData[] = JSON.parse(
    localStorage.getItem("data") as string
  );
  const orgDepartment = data.find(
    organization => organization.id === organizationId
  );
  //    orgDepartment?.departments.
  //   const newData = {...orgDepartment, departments:  }

  //   const selected;
}

export const departmentService = {
  getDepartmentsById,
  setDepartments,
  addEmployeeToDepartment
};

// function getNoteIdxById(noteId) {
//   return gNotes.findIndex(note => note.id === noteId);
// }
