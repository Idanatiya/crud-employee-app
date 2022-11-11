import { Button, TableCell, TableRow } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { EmployeesByDepartments } from "@/types";

import BaseTable from "../BaseTable/BaseTable";

interface Props {
  emplyoeesOfDep: EmployeesByDepartments[];
  onDeleteEmployee: (id: string) => void;
}

function EmployeeTable({ emplyoeesOfDep, onDeleteEmployee }: Props) {
  return (
    <BaseTable
      headers={[
        "Employee Department",
        "Employee Name",
        "Employee Id",
        "Actions"
      ]}
    >
      {emplyoeesOfDep.map(({ name: depName, employees }) => {
        return employees.map(employee => (
          <TableRow key={uuidv4()}>
            <TableCell>{depName}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.id}</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                onClick={() => onDeleteEmployee(employee.id)}
              >
                Delete Employee
              </Button>
            </TableCell>
          </TableRow>
        ));
      })}
    </BaseTable>
  );
}

export default EmployeeTable;
