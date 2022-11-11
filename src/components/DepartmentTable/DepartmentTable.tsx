import { Button, TableCell, TableRow } from "@mui/material";

import BaseTable from "@/components/BaseTable/BaseTable";
import { Department } from "@/types";

interface Props {
  departments: Department[];
  onHandleDelete: (id: string) => void;
}

const DepartmentTable = ({ departments, onHandleDelete }: Props) => {
  return (
    <BaseTable headers={["Department", "Id", "Action"]}>
      {departments.map(({ id, name }) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell>{id}</TableCell>
          <TableCell>
            <Button variant="outlined" onClick={() => onHandleDelete(id)}>
              Delete Department
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
};

export default DepartmentTable;
