import { Button, TableCell, TableRow } from "@mui/material";

import { Employee } from "@/types";

import BaseTable from "../BaseTable/BaseTable";

interface Props {
  employees: Employee[];
  onDeleteEmployee: (id: string) => void;
}

function EmployeeTable({ employees, onDeleteEmployee }: Props) {
  return (
    <BaseTable headers={["Employee Name", "Employee Id", "Actions"]}>
      {employees.map(({ id, name }) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell>{id}</TableCell>
          <TableCell>
            <Button variant="outlined" onClick={() => onDeleteEmployee(id)}>
              Delete Employee
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
}

export default EmployeeTable;
