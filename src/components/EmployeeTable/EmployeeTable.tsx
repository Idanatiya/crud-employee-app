import { TableCell, TableRow } from "@mui/material";
import React from "react";

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
            <button onClick={() => onDeleteEmployee(id)}>
              Delete Employee
            </button>
          </TableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
}

export default EmployeeTable;
